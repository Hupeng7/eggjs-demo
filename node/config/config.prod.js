'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：config.default.js
 * 文件描述：项目的基本配置文件
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

const databaseconfig = require("./core/database.config.prod");
const swaggerdoc = require("./core/swagger.config.prod");

// 重新设置body大小
exports.bodyParser = {
    jsonLimit: '5mb',
    formLimit: '5mb',
};

// 配置项目唯一的标识
exports.keys = "monksoul.napi_prod";

// egg-swagger-doc 配置信息
exports.swaggerdoc = swaggerdoc;

// 数据库配置
exports.sequelize = databaseconfig;

// 跨域配置
exports.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
};

// 获取上传的文件
exports.multipart = {
    mode: 'file',
}

