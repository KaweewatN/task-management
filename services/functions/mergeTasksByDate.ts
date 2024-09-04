import {GroupedDateTasksType, TaskType} from "../../types/task-fetch.type";

export default function mergeTasksByDate(
  existingTasks: GroupedDateTasksType[],
  newTasks: GroupedDateTasksType[],
): GroupedDateTasksType[] {
  const taskMap: {[key: string]: TaskType[]} = {};

  existingTasks.forEach((group) => {
    taskMap[group.date] = group.tasks as TaskType[];
  });

  newTasks.forEach((group) => {
    if (taskMap[group.date]) {
      taskMap[group.date] = [
        ...(taskMap[group.date] as TaskType[]),
        ...(group.tasks as TaskType[]),
      ];
    } else {
      taskMap[group.date] = group.tasks as TaskType[];
    }
  });

  return Object.entries(taskMap).map(([date, tasks]) => ({date, tasks}));
}
