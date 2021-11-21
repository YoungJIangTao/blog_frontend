import { useState, useCallback } from "react";

import { Button, notification, Table, Tag, Tooltip, Space, Form } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useAntdTable } from "ahooks";

import {
  addUser,
  deleteUserById,
  getAllUsers, modifyUser,

} from "../../../api/user";
import { UserModal } from "./modal";

export function AdminUser() {
  const [visible, setVisible] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<string | null | undefined>(null);
  const toggleVisible = useCallback(() => {
    setVisible(!visible);
  }, [setVisible, visible]);

  const openModal = (id: string | undefined) => {
    toggleVisible();
    setActiveId(id);
  };

  const refresh = useCallback(async () => {
    const res = await getAllUsers();
    console.log(res)
    return { total: res.data.length, list: res.data };
  }, []);

  const { tableProps, search } = useAntdTable(refresh, {
    defaultPageSize: 10,
  });

  const { submit } = search;

  const deleteHandler = async (id: string) => {
    const res = await deleteUserById({ id });
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
      title: "用户名称",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "密码",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "创建时间",
      key: "createAndUpdateTime",
      render: (d: any) => {
        return (
          <Tooltip
            title={`上次更新于: ${new Date(d.createTime).toLocaleString()}`}
          >
            <Tag color="blue">{new Date(d.createTime).toLocaleString()}</Tag>
          </Tooltip>
        );
      },
    },
    {
      title: "操作",
      key: "otherOption",
      render: (d: any) => {
        return (
          <Space>
            <Button
              shape="circle"
              type="primary"
              icon={<EditOutlined />}
              onClick={openModal.bind(null, d.id)}
            ></Button>
            <Button
              shape="circle"
              danger
              icon={<DeleteOutlined />}
              onClick={deleteHandler.bind(null, d.id)}
            ></Button>
          </Space>
        );
      },
    },
  ]);

  return (
    <>
      <Form layout="inline" style={{ marginBottom: "12px" }}>
        <Form.Item>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={openModal.bind(null, undefined)}
          >
            新增
          </Button>
        </Form.Item>
      </Form>
      <Table rowKey={(d) => d.id} columns={columns} {...tableProps} bordered />
      <UserModal
        {...{
          visible,
          onCancel: toggleVisible,
          onAdd: async (values) => {
            const res = await addUser(values);
            submit();
            toggleVisible();
            notification.success({
              message: res.message,
            });
          },
          onModify: async (values) => {
            const res = await modifyUser(values);
            submit();
            toggleVisible();
            notification.success({
              message: res.message,
            });
          },
          id: activeId,
        }}
      />
    </>
  );
}
