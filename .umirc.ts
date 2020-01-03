import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  //history: 'hash',
  treeShaking: true,
  routes: [
    //我曹，坑爹啊，umi绝对不能放一个index的layout，坑了我半年
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/login', component: '../pages/login'},
        { path: '/backstage', component: '../pages/backstage/index'}
      ]
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'reats',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
