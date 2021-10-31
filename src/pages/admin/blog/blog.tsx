import { useState } from "react";

import { Tabs } from "antd";
import { Editor } from "./editor";
import { SylApi } from "@syllepsis/adapter";
import { List } from "./list/list";

const { TabPane } = Tabs;

export function AdminBlog() {
  const [editor, setEditor] = useState<SylApi | undefined>();
  const [activeKey, setActiveKey] = useState<string>("list");

  return (
    <Tabs
      activeKey={activeKey}
      onChange={(key) => {
        setActiveKey(key);
      }}
      type="card"
    >
      <TabPane tab="列表" key="list">
        <List />
      </TabPane>
      <TabPane tab="新增文章" key="editor">
        <Editor {...{ editor, setEditor }} />
      </TabPane>
    </Tabs>
  );
}
