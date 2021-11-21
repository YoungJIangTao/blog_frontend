import { useEffect } from "react";
import { Modal, Form, Input } from "antd";
import { getUserById } from "../../../api/user";

interface IUserModal {
  visible: boolean;
  onCancel: (...p: any) => void;
  onModify: (...p: any) => void;
  onAdd: (...p: any) => void;
  id?: string | null;
}

export function UserModal({
  visible,
  onCancel,
  onModify,
  onAdd,
  id,
}: IUserModal) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (id !== null && id !== undefined) {
      getUserById({ id }).then((res: any) => {

        console.log(res);
        form.setFieldsValue({
          ...res,
        });
      });
    } else {
      form.setFieldsValue({
        id: undefined,
        username: undefined,
        password: undefined,
        createTime: undefined,
      });
    }
  }, [form, id]);

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      title="用户"
      okText={"确定"}
      cancelText={"取消"}
      onOk={() => {
        if (id !== undefined || id !== null) {
          onModify(form.getFieldsValue());
        } else {
          onAdd(form.getFieldsValue());
        }
      }}
    >
      <Form form={form} layout="horizontal">
        <Form.Item label="id" name="id" hidden>
          <Input />
        </Form.Item>
        <Form.Item label="createTime" name="createTime" hidden>
          <Input />
        </Form.Item>
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "请输入用户名!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
