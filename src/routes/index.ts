import { Express, Router } from 'express';
import emailRoutes from './emailRoutes';
import rootRouters from './home';

interface RouterConf {
  path: string;
  router: Router;
}

// 路由配置
const routerConf: Array<RouterConf> = [
  { path: '/', router: rootRouters },
  { path: '/email', router: emailRoutes },
];

// 路由配置接口
function useRoutes(app: Express) {
  routerConf.forEach((conf) => app.use(conf.path, conf.router));
}

export default useRoutes;
