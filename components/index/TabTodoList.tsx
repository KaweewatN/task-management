"use client";

import Icons from "@components/icons/icons";
import TodoLists from "@components/index/TodoLists";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@components/shadui/tabs";

export default function TabTodoList() {
  return (
    <div className="mt-3">
      <Tabs defaultValue="todo" className="flex flex-col justify-center align-center">
        <TabsList>
          <TabsTrigger value="todo" className="text-md lg:text-lg font-medium">
            To-do
          </TabsTrigger>
          <TabsTrigger value="doing" className="text-md lg:text-lg font-medium">
            Doing
          </TabsTrigger>
          <TabsTrigger value="done" className="text-md lg:text-lg font-medium">
            Done
          </TabsTrigger>
        </TabsList>
        <TabsContent value="todo" className="mt-3">
          <TodoLists status="TODO" icon={Icons.todo("text-yellow-500")} />
        </TabsContent>
        <TabsContent value="doing" className="mt-3">
          <TodoLists status="DOING" icon={Icons.doing("text-blue-500")} />
        </TabsContent>
        <TabsContent value="done" className="mt-3">
          <TodoLists status="DONE" icon={Icons.done("text-green-500")} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
