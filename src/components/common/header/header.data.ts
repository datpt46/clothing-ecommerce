export const title: string = "CEO";

export const pages: { id?: number; name: string; path: string; isRender: boolean }[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
    isRender: false,
  },
  {
    id: 2,
    name: "Products",
    path: "/",
    isRender: true,
  },
  {
    id: 3,
    name: "Pricing",
    path: "/",
    isRender: true,
  },
  {
    id: 4,
    name: "Blog",
    path: "/",
    isRender: true,
  },
];

export const settings: { id?: number; name: string; path: string }[] = [
  {
    id: 1,
    name: "Profile",
    path: "/",
  },
  {
    id: 2,
    name: "Account",
    path: "/",
  },
  {
    id: 3,
    name: "Dashboard",
    path: "/",
  },
  {
    id: 4,
    name: "Logout",
    path: "/",
  },
];
