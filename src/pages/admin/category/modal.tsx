import { useEffect } from "react";
import { Modal, Form, Input } from "antd";
import { geCategoryById } from "../../../api/category";

interface ICategoryModal {
  visible: boolean;
  onCancel: (...p: any) => void;
  onModify: (...p: any) => void;
  onAdd: (...p: any) => void;
  id?: string | null;
}

export function CategoryModal({
  visible,
  onCancel,
  onModify,
  onAdd,
  id,
}: ICategoryModal) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (id !== null && id !== undefined) {
      geCategoryById({ id }).then((res) => {
        console.log(res.data);
        form.setFieldsValue({
          ...res.data,
        });
      });
    } else {
      form.setFieldsValue({
        id: undefined,
        name: undefined,
        createAt: undefined,
      });
    }
  }, [form, id]);

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      title="博客分类"
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
          label="分类名称"
          name="name"
          rules={[{ required: true, message: "请输入分类名称!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
