import { useState, useCallback } from "react";

import { Button, notification, Table, Tag, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useAntdTable } from "ahooks";

import { deleteArticleById, getAllArticles } from "../../../api/blog";

export function AdminBlog() {
  const refresh = useCallback(async () => {
    const res = await getAllArticles();
    return { total: res.data.length, list: res.data };
  }, []);

  const { tableProps, search } = useAntdTable(refresh, {
    defaultPageSize: 10,
  });

  const { submit } = search;

  const deleteHandler = async (id: string) => {
    const res = await deleteArticleById({ id });
    submit();
    notification.success({ message: res.message });
  };

  const [columns] = useState<any[]>([
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "作者",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "介绍",
      dataIndex: "introduce",
      key: "introduce",
    },
    {
      title: "图表",
      dataIndex: "coverInfo",
      key: "coverInfo",
    },
    {
      title: "发布时间",
      key: "createAndUpdateTime",
      render: (d: any) => {
        return (
          <Tooltip
            title={`上次更新于: ${new Date(d.updateAt).toLocaleString()}`}
          >
            <Tag color="blue">{new Date(d.createAt).toLocaleString()}</Tag>
          </Tooltip>
        );
      },
    },
    {
      title: "操作",
      key: "otherOption",
      render: (d: any) => {
        return (
          <Button
            shape="circle"
            danger
            icon={<DeleteOutlined />}
            onClick={deleteHandler.bind(null, d.id)}
          ></Button>
        );
      },
    },
  ]);

  return (
    <>
      <Table rowKey={(d) => d.id} columns={columns} {...tableProps} bordered />
    </>
  );
}
