import { NavLink as Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Layout, Menu } from "antd";

export function Admin({ route }: any) {
  console.log(route);
  return (
    <Layout>
      <Layout.Sider>
        <Menu>
          <Menu.Item>
            <Link to="/admin/blog">博客管理</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/admin/category">分类管理</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/admin/links">友情链接管理</Link>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout.Content>{renderRoutes(route.routes)}</Layout.Content>
    </Layout>
  );
}
