import { NavLink as Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Layout, Menu } from "antd";

export function Admin({ route, children }: any) {
  return (
    <Layout>
      <Layout.Sider theme="light">
        <Menu>
          <Menu.Item key="admin/blog">
            <Link to="/admin/blog">博客管理</Link>
          </Menu.Item>
          <Menu.Item key="admin/category">
            <Link to="/admin/category">分类管理</Link>
          </Menu.Item>
          <Menu.Item key="admin/links">
            <Link to="/admin/links">友情链接管理</Link>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout.Content style={{ padding: 12 }}>
        {renderRoutes(route.routes)}
      </Layout.Content>
    </Layout>
  );
}
