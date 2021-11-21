import { NavLink as Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Layout, Menu } from "antd";

export function Admin({ route, children }: any) {
  return (
    <Layout>
      <Layout.Sider theme="light">
        <Menu>
        <Menu.Item key="admin/overview">
            <Link to="/admin/overview">总览</Link>
          </Menu.Item>
          <Menu.Item key="admin/blog">
            <Link to="/admin/blog">博客管理</Link>
          </Menu.Item>
          <Menu.Item key="admin/category">
            <Link to="/admin/category">分类管理</Link>
          </Menu.Item>
          <Menu.Item key="admin/links">
            <Link to="/admin/links">友情链接管理</Link>
          </Menu.Item>
          <Menu.Item key="admin/user">
            <Link to="/admin/user">用户管理</Link>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout.Content style={{ padding: 12 }}>
        <div style={{minHeight:'calc(100vh - 64px -70px)'}}>
          {renderRoutes(route.routes)}
        </div>

      </Layout.Content>
    </Layout>
  );
}
