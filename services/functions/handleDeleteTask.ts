import {
  DeletedGroupedDateTasksType,
  GroupedDateTasksType,
  TaskType,
} from "../../types/task-fetch.type";

// function to delete task
export const handleDeleteTask = (
  taskId: string,
  taskDate: string,
  setGroupedTasks: React.Dispatch<React.SetStateAction<GroupedDateTasksType[]>>,
) => {
  setGroupedTasks((prev) =>
    prev
      .map((group: GroupedDateTasksType) =>
        group.date === taskDate
          ? {
              ...group,
              tasks: (group.tasks as DeletedGroupedDateTasksType[]).filter(
                (task: DeletedGroupedDateTasksType) => task.id !== taskId,
              ),
            }
          : group,
      )
      .filter((group: GroupedDateTasksType) => (group.tasks as TaskType[]).length > 0),
  );
};
