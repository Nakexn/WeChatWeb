const baseUrl = '/';

const routes = [
  {
    path: '/index',
    component: '',
    children: [
      {
        path: '/chat',
        component: '',
        children: [
          {
            path: '/user_profile',
            component: ''
          }
        ]
      }
    ]
  },
  {
    path: '/address_book',
    component: ''
  },
  {
    path: '/moments',
    component: ''
  },
  {
    path: '/me',
    component: ''
  }
];
