import express from 'express';
import useRoutes from './routes'; // 路由
import config from './config/default'; // 配置
import initMiddleware from './middleware'; // 中间件
import logger from '@utils/logger'; // 日志

const PORT = config.PORT;
const app = express();

// 挂载中间件
initMiddleware(app);
// 挂载路由
useRoutes(app);

// 启动
app.listen(PORT, async () => {
  logger.info(`项目运行在：http://localhost:${PORT}`);
});
