import { useState } from "react";

import { Tabs } from "antd";
import { Editor } from "./editor";
import { SylApi } from "@syllepsis/adapter";
import { List } from "./list/list";

const { TabPane } = Tabs;

export function AdminBlog() {
  const [editor, setEditor] = useState<SylApi | undefined>();
  const [activeKey, setActiveKey] = useState<string>("list");
  const [editorName, setEditorName] = useState<string>("新增文章");
  const [articleId, setArticleId] = useState<any>(null);

  return (
    <Tabs
      activeKey={activeKey}
      onChange={(key) => {
        setActiveKey(key);
        setEditorName("新增文章");
        setArticleId(null);
      }}
      type="card"
    >
      <TabPane tab="列表" key="list">
        <List {...{ setArticleId, activeKey, setActiveKey, setEditorName }} />
      </TabPane>
      <TabPane tab={editorName} key="editor">
        <Editor {...{ editor, setEditor, articleId }} />
      </TabPane>
    </Tabs>
  );
}
