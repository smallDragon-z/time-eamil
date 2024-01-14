import { Express } from 'express';
import bodyParser from 'body-parser';
import responseHeader from './responseHeader';

function initMiddleware(app: Express) {
  app.use(responseHeader);
  // 使用 body-parser 中间件来解析请求体
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
}

export default initMiddleware;
