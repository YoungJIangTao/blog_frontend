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
            <Menu.Item>
              <Link to="/home">首页</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/blog">博客</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/archive">归档</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/links">友情链接</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/admin">后台</Link>
            </Menu.Item>
          </Menu>
        </Layout.Header>
        <Layout.Content>
          <div>{renderRoutes(routes)}</div>
        </Layout.Content>
        <Layout.Footer>
          <div style={{ textAlign: "center" }}>@Copyright</div>
        </Layout.Footer>
      </Layout>
    </Router>
  );
}
