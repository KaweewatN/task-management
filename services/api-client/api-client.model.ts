import {fetchData} from "@services/api-client/api-client.utils";
import {
  GroupedDateTasksType,
  TasksResponse,
  TaskType,
  TotalPageResponse,
} from "../../types/task-fetch.type";
import {formatDate} from "@services/functions/formatDate";

export default class AppClientModel {
  public response: GroupedDateTasksType[] = [];
  public numOffset: number = 0;
  private baseURL: string = "https://todo-list-api-mfchjooefq-as.a.run.app/todo-list";

  // function getTasks to fetch data from api
  public async getTasks(
    status: string,
    offset: number,
    limit: number,
  ): Promise<GroupedDateTasksType[]> {
    const data = await fetchData<TasksResponse>(
      `${this.baseURL}?status=${status}&offset=${offset}&limit=${limit}&sortBy=createdAt&isAsc=true`,
    );

    const groupedTasks = data.tasks.reduce((acc: any, task: any) => {
      const date = task.createdAt.split("T")[0];

      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(task);
      return acc;
    }, {});

    for (const date in groupedTasks) {
      groupedTasks[date].sort(
        (a: TaskType, b: TaskType) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
    }

    this.response = Object.entries(groupedTasks).map(([date, tasks]) => ({
      date: formatDate(date),
      tasks,
    }));

    return this.response;
  }

  // function checkOffset to check the number of offset of the data
  public async checkOffset(status: string, limit: Number): Promise<number> {
    const data = await fetchData<TotalPageResponse>(
      `${this.baseURL}?status=${status}&limit=${limit}&sortBy=createdAt&isAsc=true`,
    );
    this.numOffset = data.totalPages - 1;
    return this.numOffset;
  }
}
