import {
  Home,
  Links,
  Blog,
  Archive,
  Admin,
  AdminBlog,
  AdminArchive,
  AdminLinks,
} from "../pages";

export const routes = [
  {
    path: "/home",
    component: Home,
    exact: true,
  },
  {
    path: "/blog",
    component: Blog,
  },

  {
    path: "/archive",
    component: Archive,
  },
  {
    path: "/links",
    component: Links,
  },
  {
    path: "/admin",
    component: Admin,
    routes: [
      {
        path: "/admin/blog",
        component: AdminBlog,
      },
      {
        path: "/admin/category",
        component: AdminArchive,
      },
      {
        path: "/admin/links",
        component: AdminLinks,
      },
    ],
  },
];
