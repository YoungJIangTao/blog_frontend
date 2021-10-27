import {
  Home,
  Links,
  Blog,
  Archive,
  Admin,
  AdminBlog,
  AdminCategory,
  AdminLinks,
} from "../pages";

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
    component: Blog,
  },
  {
    key: "archive",
    path: "/archive",
    component: Archive,
  },
  {
    key: "links",
    path: "/links",
    component: Links,
  },
  {
    key: "admin",
    path: "/admin",
    component: Admin,
    routes: [
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
    ],
  },
];
