const tree = {
  path: 'svg',
  name: 'svg',
  children: [
    {
      path: 'icons/a.icons',
      name: 'a.icons',
      type: 'file',
    },
    {
      path: 'icons/one-depth',
      name: 'one-depth',
      children: [
        {
          path: 'icons/one-depth/b.icons',
          name: 'b.icons',
          type: 'file',
        },
        {
          path: 'icons/one-depth/two_depth',
          name: 'two_depth',
          children: [
            {
              path: 'icons/one-depth/two_depth/c.icons',
              name: 'c.icons',
              type: 'file',
            },
            {
              path: 'icons/one-depth/two_depth/d.icons',
              name: 'd.icons',
              type: 'file',
            },
          ],
          type: 'directory',
        },
      ],
      type: 'directory',
    },
  ],
  type: 'directory',
};

export default tree;
