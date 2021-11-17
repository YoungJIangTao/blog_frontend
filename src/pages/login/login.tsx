import { Form, Input, Button, notification } from "antd";
import { login } from "../../api/login";
import React, { useContext } from "react";
import { GlobalContext } from "../../modal/global-context";

export function Login(props: any) {
  const { setUser } = useContext(GlobalContext);

  const onFinish = async (values: any) => {
    try {
      const res = await login(values);
      console.log(res);
      if (res.code === 200) {
        setUser(res.data);
        notification.success({
          message: "登陆成功",
        });
        props.history.push("/admin/blog");
      } else {
        notification.error({
          message: "登陆失败",
          description: res.message,
        });
      }
    } catch (e) {
      console.log(e);

      notification.error({
        message: "登陆异常",
      });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    notification.error({
      message: "登录失败",
    });
  };

  return (
    <div
      style={{
        margin: "50px auto",
        width: "400px",
        background: "#fff",
        padding: "16px",
      }}
    >
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="用户"
          name="username"
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            登陆
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
