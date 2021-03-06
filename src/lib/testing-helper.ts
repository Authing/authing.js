require('dotenv').config({
  path: '.env'
});

/** 随机字符串 **/
export const randomString = () =>
  Math.random()
    .toString(36)
    .slice(2);

/**
 * 睡眠函数
 * @param ms 毫秒
 */
export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * 从环境变量中读取配置
 *
 */
export const getOptionsFromEnv = ()=> {
  return {
    userPoolId: process.env.AUTHING_USERPOOL_ID,
    secret: process.env.AUTHING_USERPOOL_SECRET,
    appId: process.env.AUTHING_APP_ID,
    appHost: process.env.AUTHING_APP_HOST,
    host: process.env.AUTHING_HOST,
    timeout: 10000,
    publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4xKeUgQ+Aoz7TLfAfs9+paePb
5KIofVthEopwrXFkp8OCeocaTHt9ICjTT2QeJh6cZaDaArfZ873GPUn00eOIZ7Ae
+TiA2BKHbCvloW3w5Lnqm70iSsUi5Fmu9/2+68GZRH9L7Mlh8cFksCicW2Y2W2uM
GKl64GDcIq3au+aqJQIDAQAB
-----END PUBLIC KEY-----`
  };
};

/**
 * @description 生成随机字符串
 *
 */
export function generateRandomString(length: number = 30) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function generateRandomEmail() {
  return generateRandomString(14) + '@example.com';
}

/**
 * @description 生成随机手机号
 *
 */
export const generateRandomPhone = () => {
  const headerNums = new Array(
    '139',
    '138',
    '137',
    '136',
    '135',
    '134',
    '159',
    '158',
    '157',
    '150',
    '151',
    '152',
    '188',
    '187',
    '182',
    '183',
    '184',
    '178',
    '130',
    '131',
    '132',
    '156',
    '155',
    '186',
    '185',
    '176',
    '133',
    '153',
    '189',
    '180',
    '181',
    '177'
  );
  const headerNum = headerNums[Math.floor(Math.random() * 10)];
  const bodyNum = Math.random()
    .toString()
    .replace('0.', '')
    .slice(0, 8);
  return headerNum + bodyNum;
};
