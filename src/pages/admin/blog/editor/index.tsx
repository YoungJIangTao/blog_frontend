import React, { useEffect, useState } from "react";

import { Form, Input, Card, Button, Divider, notification, Select } from "antd";
import { Editor as SylEditor } from "../../../../components/editor";
import { addArticle, getArticleById, modifyArticle } from "../../../../api/blog";
import { getAllCategories } from "../../../../api/category";

interface IEditor {
  editor: any;
  setEditor: any;
  articleId: any;
}

export function Editor({ editor, setEditor, articleId }: IEditor) {
  const [form] = Form.useForm();

  const [categorys, setCategorys] = useState([]);
  useEffect(() => {

    if (articleId !== null && articleId !== undefined) {
      getArticleById({ id: articleId }).then((res) => {
        console.log(res.data);
        form.setFieldsValue({
          ...res.data
        });
        editor.setHTML(res.data.content);
      })
    }

  }, [articleId, editor, form])

  useEffect(() => {
    getAllCategories().then(res => {
      setCategorys(res.data)
    })
  }, [])

  return (
    <Card>
      <Form form={form} layout="horizontal">
        <Form.Item
          label="id"
          name="id"
          rules={[{ required: true, message: "请输入id!" }]}
          hidden
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="标题"
          name="title"
          rules={[{ required: true, message: "请输入标题!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="分类" name="categoryId"
          rules={[{ required: true, message: "请选择分类!" }]}
        >
          <Select>
            {categorys.map((d: any) => {
              return <Select.Option value={d.id}>{d.name}</Select.Option>
            })}
          </Select>
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
              if (articleId === null || articleId === undefined) {
                const res = await addArticle(data, form.getFieldValue('categoryId'))
                notification.success({
                  message: res.message,
                });
              } else {
                const res = await modifyArticle(data);
                notification.success({
                  message: res.message,
                });
              }
            }}
          >
            提交
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
