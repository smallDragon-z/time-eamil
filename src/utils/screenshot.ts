// index.js

// 引入puppeteer
import puppeteer from 'puppeteer';

// 需要生成的图的文件名
const fileName = 'example.png';

// html网络地址
const url = 'https://m.jd.com/';

const screenshot = async () => {
  try {
    const browser = await puppeteer.launch({
      defaultViewport: {
        width: 414, // 设置移动端页面宽度
        height: 3000, // 设置移动端页面高度
        isMobile: true,
        hasTouch: true,
        deviceScaleFactor: 2, // 可选，设备像素比
      },
    });

    const page = await browser.newPage();
    await page.goto(url);
    const res = await page.screenshot({ path: fileName, fullPage: true });
    await browser.close();
    return {
      message: 'success',
      data: res,
    };
  } catch (error) {
    return {
      message: 'error',
      data: error,
    };
  }
};
export default screenshot;
