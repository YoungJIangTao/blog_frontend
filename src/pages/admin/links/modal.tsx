import { useEffect } from "react";
import { Modal, Form, Input } from "antd";
import { getFriendLinkById } from "../../../api/friend-link";

interface ILinkModal {
  visible: boolean;
  onCancel: (...p: any) => void;
  onModify: (...p: any) => void;
  onAdd: (...p: any) => void;
  id?: string | null;
}

export function LinkModal({
  visible,
  onCancel,
  onModify,
  onAdd,
  id,
}: ILinkModal) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (id !== null && id !== undefined) {
      getFriendLinkById({ id }).then((res) => {
        console.log(res.data);
        form.setFieldsValue({
          ...res.data,
        });
      });
    } else {
      form.setFieldsValue({
        id: undefined,
        url: undefined,
        name: undefined,
      });
    }
  }, [form, id]);

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      title="友情链接"
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
        <Form.Item label="createAt" name="createAt" hidden>
          <Input />
        </Form.Item>
        <Form.Item
          label="名称"
          name="name"
          rules={[{ required: true, message: "请输入友情链接站点名称!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="链接"
          name="url"
          rules={[{ required: true, message: "请输入地址!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
