// // 引入 node-schedule 模块
//
// const nodemailer = require('nodemailer');
// /**
//  * 邮箱发送
//  *
//  * @param  {string}  to 对方邮箱
//  * @param  {string}  content 发送内容
//  */
//
// // 创建Nodemailer传输器 SMTP 或者 其他 运输机制
// let transporter = nodemailer.createTransport({
//   service: 'QQ', // 使用内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
//   port: 465, // SMTP 端口
//   secureConnection: true, // 使用 SSL
//   auth: {
//     user: '1840354092@qq.com', // 发送方邮箱的账号
//     pass: '******', // 邮箱授权密码
//   },
// });
//
// exports.send = (to, content) => {
//   return new Promise((resolve, reject) => {
//     transporter.sendMail(
//       {
//         from: `"ZY.API" <1840354092@qq.com>`, // 发送方邮箱的账号
//         to: to, // 邮箱接受者的账号
//         subject: 'Welcome to ZY.API', // Subject line
//         // text: '"MG'Blog ?"', // 文本内容
//         html: `
//         <img src="http://www.zhouyi.run:3001/api/v1/files/preview?p=pexels-photo-276452.jpeg&&mimetype=image/jpeg" alt=""  style="height:auto;display:block;" />
//         <p >??? <a href="http://www.zhouyi.run/#/">ZY.API</a></p>
//         <p style="font-weight: bold">${content}</p>
//         <p ><a style="font-size: 18px;font-weight: bolder" href="http://www.zhouyi.run/#/">确认</a></p>
//         <p style="text-indent: 2em;">祝您工作顺利，心想事成</p>`,
//       },
//       (error, info) => {
//         if (error) {
//           reject(error);
//         }
//         resolve(info);
//       },
//     );
//   });
// };
//
// import schedule from 'node-schedule';
//
// /*
//  * TODO:编写 Cron 表达式时，有五个占位符可以使用，分别表示分钟、小时、日期、月份和星期几。
//  *      每个占位符可以使用特定的值、值范围、逗号分隔的值列表和通配符等等
//  *
//  *       * * * * * *
//  *       | | | | | |
//  *       | | | | | day of week
//  *       | | | | month
//  *       | | | day of month
//  *       | | hour
//  *       | minute
//  *       second ( optional )
//  *
//  *      示例 Cron 表达式：
//  *           每分钟的第30秒触发： 30 * * * * *
//  *           每小时的1分30秒触发 ：30 1 * * * *
//  *           每天的凌晨1点1分30秒触发 ：30 1 1 * * *
//  *           每月的1日1点1分30秒触发 ：30 1 1 1 * *
//  *           每年的1月1日1点1分30秒触发 ：30 1 1 1 1 *
//  *           每周1的1点1分30秒触发 ：30 1 1 * * 1
//  * */
//
// // 创建一个任务调度器类
// class TaskScheduler {
//   // 构造函数，接受 cron 表达式和要执行的任务作为参数
//   constructor(cronExpression, task) {
//     // 将传入的 cron 表达式和任务保存为成员变量
//     this.cronExpression = cronExpression;
//     this.task = task;
//     // 初始化 job 为 null
//     this.job = null;
//   }
//
//   // 启动任务
//   start() {
//     // 如果当前没有正在运行的任务，则创建新的任务
//     if (!this.job) {
//       this.job = schedule.scheduleJob(this.cronExpression, this.task);
//       console.log(`定时任务启动： ${this.cronExpression}`);
//     }
//   }
//
//   // 停止任务
//   stop() {
//     // 如果当前有正在运行的任务，则取消任务并将 job 设为 null
//     if (this.job) {
//       this.job.cancel();
//       console.log(`定时任务停止： ${this.cronExpression}`);
//       this.job = null;
//     }
//   }
// }
//
// // 导出任务调度器类
// module.exports = TaskScheduler;
