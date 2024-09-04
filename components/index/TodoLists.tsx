"use client";

import React, {useState, useEffect} from "react";
import AppClientApi from "@services/api-client/api-client";
import {GroupedDateTasksType, TaskType} from "../../types/task-fetch.type";
import {ExtractTime} from "@services/functions/extractTime";
import SkeletonLoading from "@components/ui/SkeletonLoading";
import SkeletonLoadingMore from "@components/ui/SkeletonLoadingMore";
import delay from "@services/functions/delay";
import {LIMIT_TASK_QUERY} from "@services/constants/constant";
import mergeTasksByDate from "@services/functions/mergeTasksByDate";
import {handleDeleteTask} from "@services/functions/handleDeleteTask";
import Icons from "@components/icons/icons";

export default function TodoLists({status, icon}: {status: string; icon: JSX.Element}) {
  const [groupedTasks, setGroupedTasks] = useState<GroupedDateTasksType[]>([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState<number>(0);
  const [limitOffset, setLimitOffset] = useState<number>(0);

  // fetch api tasks data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await delay(700);
      const data = await new AppClientApi().todoList.getTasks(status, offset, LIMIT_TASK_QUERY);
      const offsetLimit = await new AppClientApi().todoList.checkOffset(status, LIMIT_TASK_QUERY);
      setLimitOffset(offsetLimit);
      setGroupedTasks((prev) => mergeTasksByDate(prev, data));
      setLoading(false);
    };

    fetchData();
  }, [offset, status]);

  // handle scrolling screen
  const handleScroll = (): void => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      if (offset <= limitOffset) {
        setOffset((prevOffset) => prevOffset + 1);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading && offset === 0) {
    return <SkeletonLoading />;
  }

  return (
    <>
      <div className="flex flex-col justify-center px-10 pb-5">
        {groupedTasks.map((groupDate: any, index: number) => (
          <div key={index} className="mt-3">
            <h2 className="text-md font-bold text-darkBlueOne">{groupDate?.date}</h2>
            <ul className="flex flex-col space-y-5 py-3">
              {groupDate?.tasks.map((task: TaskType) => (
                <li
                  key={task.id}
                  className="bg-white rounded-lg flex justify-between p-3 pt-4 relative"
                >
                  <div className="flex space-x-2">
                    <h3 className="mt-[2px]">{icon}</h3>
                    <div className="flex flex-col">
                      <h3 className="text-mdfont-medium leading-5 max-w-64">{task.title}</h3>
                      <p className="text-sm text-gray-600 mt-2 leading-5 lg:w-96">
                        {task.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-[#2f69c0]">
                    {ExtractTime(new Date(task.createdAt))}
                  </p>
                  <button
                    onClick={() => handleDeleteTask(task.id, groupDate.date, setGroupedTasks)}
                    className="text-white text-[0.6rem] bg-red-500 p-1 rounded-full absolute -top-1 -right-1"
                  >
                    {Icons.delete()}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {loading && offset > 0 && offset < limitOffset && <SkeletonLoadingMore />}
    </>
  );
}
