import { HashRouter as Router, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from "./routes";
import { Layout, Menu } from "antd";

export function App() {
  return (
    <Router>
      <Layout>
        <Layout.Header style={{ backgroundColor: "#fff" }}>
          <Menu mode="horizontal">
            <Menu.Item key={"home"}>
              <Link to="/home">首页</Link>
            </Menu.Item>
            <Menu.Item key={"blog"}>
              <Link to="/blog">博客</Link>
            </Menu.Item>
            <Menu.Item key={"archive"}>
              <Link to="/archive">归档</Link>
            </Menu.Item>
            <Menu.Item key={"links"}>
              <Link to="/links">友情链接</Link>
            </Menu.Item>
            <Menu.Item key={"admin"}>
              <Link to="/admin">后台</Link>
            </Menu.Item>
          </Menu>
        </Layout.Header>
        <Layout.Content>
          <div style={{ display: "block" }}>{renderRoutes(routes)}</div>
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
