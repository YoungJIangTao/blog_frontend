import {
  Home,
  Blog,
  Archive,
  Login,
  Admin,
  AdminBlog,
  AdminCategory,
  AdminLinks,
  AdminUser,
  AdminOverview
} from "../pages";
import { BlogDetail } from "../pages/blog-detail";

export const routes = [
  {
    key: "home",
    path: "/home",
    component: Home,
    exact: true,
  },
  {
    key: "blog",
    path: "/blog",
    exact: true,
    component: Blog,
  },
  {
    key: "blog/detail",
    exact: true,
    path: "/blog/detail/:id",
    component: BlogDetail,
  },
  {
    key: "archive",
    path: "/archive",
    component: Archive,
  },
  {
    key: "login",
    path: "/login",
    component: Login,
  },
  {
    key: "admin",
    path: "/admin",
    component: Admin,
    routes: [
      {
        key: "admin/overview",
        path: "/admin/overview",
        component: AdminOverview,
      },
      {
        key: "admin/blog",
        path: "/admin/blog",
        component: AdminBlog,
      },
      {
        key: "admin/category",
        path: "/admin/category",
        component: AdminCategory,
      },
      {
        key: "admin/links",
        path: "/admin/links",
        component: AdminLinks,
      },
      {
        key: "admin/user",
        path: "/admin/user",
        component: AdminUser,
      },
    ],
  },
];
