import { ConfigType } from "./types/ConfigType";

export const Config: ConfigType = {
    siteName: "Seanhui Status",
    apikey: process.env
        .APIKEY /* 请设置环境变量[APIKEY]以实现，你也可以在根目录下创建.env文件 */,
    logo: "http://q1.qlogo.cn/g?b=qq&nk=3348626299&s=640",
    usePage: true,
};
