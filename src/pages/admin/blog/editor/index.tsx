import React from "react";

import { Form, Input, Card, Button, Divider, notification } from "antd";
import { Editor as SylEditor } from "../../../../components/editor";
import { addArticle } from "../../../../api/blog";

interface IEditor {
  editor: any;
  setEditor: any;
}

export function Editor({ editor, setEditor }: IEditor) {
  const [form] = Form.useForm();

  return (
    <Card>
      <Form form={form} layout="horizontal">
        <Form.Item
          label="标题"
          name="title"
          rules={[{ required: true, message: "请输入标题!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="介绍"
          name="introduce"
          rules={[{ required: true, message: "请输入简介!" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <SylEditor
          {...{
            editor,
            setEditor,
          }}
        />
        <Divider />

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            onClick={async () => {
              const data = {
                content: editor.getHTML(),
                ...form.getFieldsValue(),
              };

              const res = await addArticle(data);

              notification.success({
                message: res.message,
              });
            }}
          >
            提交
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
