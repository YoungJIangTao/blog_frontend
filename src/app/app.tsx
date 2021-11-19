import { HashRouter as Router, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from "./routes";
import { Layout, Menu, Dropdown, Space, Avatar, notification } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { logout } from "../api/login";
import { GlobalContext } from "../modal/global-context";
import { useContext } from "react";

export function App(props: any) {
  const { user, setUser } = useContext(GlobalContext);

  const menu = (
    <Menu>
      {user ? (
        <Menu.Item
          key="logout"
          onClick={async () => {
            const res = await logout();
            if (res.code === 200) {
              setUser(undefined);
              window.location.href = "#/home";
              notification.success({
                message: "注销成功",
                description: res.message,
              });
            } else {
              notification.error({
                message: "操作失败",
              });
            }
          }}
        >
          注销
        </Menu.Item>
      ) : (
        <Menu.Item key="login">
          <Link to="/login">用户登陆</Link>
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <Router>
      <Layout>
        <Layout.Header style={{ backgroundColor: "#fff" }}>
          <div style={{
            display: 'flex'
          }}>
            <div>
              <img
                width="100%"
                height="32px"
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                alt=""
              />
            </div>
            <Menu mode="horizontal" style={{ width: "600px"}}>
              <Menu.Item key={"home"}>
                <Link to="/home">首页</Link>
              </Menu.Item>
              <Menu.Item key={"blog"}>
                <Link to="/blog">博客</Link>
              </Menu.Item>
              <Menu.Item key={"archive"}>
                <Link to="/archive">归档</Link>
              </Menu.Item>
              {user && (
                <Menu.Item key={"admin"}>
                  <Link to="/admin/blog">后台</Link>
                </Menu.Item>
              )}
            </Menu>
            <div
              style={{
                marginLeft: "auto",
              }}
            >
              <Dropdown overlay={menu}>
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Dropdown>
            </div>
          </div>
        </Layout.Header>
        <Layout.Content>
          <div style={{ display: "block", minHeight: "calc(100vh - 64px - 70px)" }}>
            {renderRoutes(routes)}
          </div>
        </Layout.Content>
        <Layout.Footer>
          <div style={{ textAlign: "center", display: "block" }}>
            @Copyright
          </div>
        </Layout.Footer>
      </Layout>
    </Router>
  );
}
