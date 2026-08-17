export interface RepoNode {
  id: string;
  name: string;
  type: "folder" | "file";
  children?: RepoNode[];
}

export const ottRepository: RepoNode[] = [
  {
    id: "client",
    name: "client",
    type: "folder",
    children: [
      {
        id: "src",
        name: "src",
        type: "folder",
        children: [
          {
            id: "components",
            name: "components",
            type: "folder",
          },
          {
            id: "contexts",
            name: "contexts",
            type: "folder",
          },
          {
            id: "hooks",
            name: "hooks",
            type: "folder",
          },
          {
            id: "layouts",
            name: "layouts",
            type: "folder",
          },
          {
            id: "pages",
            name: "pages",
            type: "folder",
          },
          {
            id: "routes",
            name: "routes",
            type: "folder",
          },
          {
            id: "services",
            name: "services",
            type: "folder",
          },
        ],
      },
    ],
  },

  {
    id: "server",
    name: "server",
    type: "folder",
    children: [
      {
        id: "prisma",
        name: "prisma",
        type: "folder",
        children: [
          {
            id: "schema.prisma",
            name: "schema.prisma",
            type: "file",
          },
        ],
      },

      {
        id: "server-src",
        name: "src",
        type: "folder",
        children: [
          {
            id: "config",
            name: "config",
            type: "folder",
          },
          {
            id: "controllers",
            name: "controllers",
            type: "folder",
          },
          {
            id: "middlewares",
            name: "middlewares",
            type: "folder",
          },
          {
            id: "routes",
            name: "routes",
            type: "folder",
          },
          {
            id: "services",
            name: "services",
            type: "folder",
          },
          {
            id: "utils",
            name: "utils",
            type: "folder",
          },
          {
            id: "validators",
            name: "validators",
            type: "folder",
          },
          {
            id: "__tests__",
            name: "__tests__",
            type: "folder",
          },
        ],
      },
    ],
  },

  {
    id: "package.json",
    name: "package.json",
    type: "file",
  },
];