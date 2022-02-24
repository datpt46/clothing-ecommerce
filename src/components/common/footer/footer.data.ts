export interface footerItemLinkProps {
  id?: number;
  name: string;
  route: string;
}

export interface footerItemProps {
  id?: number;
  title: string;
  links: footerItemLinkProps[];
}

const footerData: footerItemProps[] = [
  {
    id: 1,
    title: "About",
    links: [
      {
        id: 2,
        name: "About Content 1",
        route: "/about1",
      },
      {
        id: 3,
        name: "About Content 2",
        route: "/about2",
      },
      {
        id: 4,
        name: "About Content 3",
        route: "/about3",
      },
    ],
  },
  {
    id: 5,
    title: "Blog",
    links: [
      {
        id: 6,
        name: "Blog Content 1",
        route: "/blog1",
      },
      {
        id: 7,
        name: "Blog Content 2",
        route: "/blog2",
      },
      {
        id: 8,
        name: "Blog Content 3",
        route: "/blog3",
      },
    ],
  },
  {
    id: 9,
    title: "Products",
    links: [
      {
        id: 10,
        name: "Product Content 1",
        route: "/Product1",
      },
      {
        id: 11,
        name: "Product Content 1",
        route: "/Product2",
      },
      {
        id: 12,
        name: "Product Content 1",
        route: "/Product3",
      },
    ],
  },
];

export default footerData;
