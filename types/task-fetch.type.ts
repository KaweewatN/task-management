export type TaskType = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  status: string;
};

export type TasksResponse = {
  tasks: TaskType[];
};

export type TotalPageResponse = {
  totalPages: number;
};

export type FormattedDate = string;

export type GroupedDateTasksType = {
  date: FormattedDate;
  tasks: TaskType[] | unknown;
};

export type DeletedGroupedDateTasksType = {
  id: string;
  date: FormattedDate;
  tasks: TaskType[] | unknown;
};
