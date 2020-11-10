'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：database.config.js
 * 文件描述：数据库配置文件
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */
// 多数据源

module.exports = {
    // dialect: 'mysql',   // 数据库类型，支持 mysql，sqlite,mssql,pgsql,oracle
    // host: "localhost",  // 数据库服务器地址
    // port: 3306, // 数据库连接端口号
    // database: "library", // 数据库名称
    // username: "root",   // 数据库登录用户名
    // password: "root",   // 数据库登录密码
    // define: {
    //     freezeTableName: true,
    //     timestamps: false
    // }

    datasources: [
        {
            delegate: 'model', // 加载所有的模型到 app.model and ctx.model
            baseDir: 'model', // 要加载的模型目录`app/model/*.js`

            dialect: 'mysql',   // 数据库类型，支持 mysql，sqlite,mssql,pgsql,oracle
            host: "localhost",  // 数据库服务器地址
            port: 3306, // 数据库连接端口号
            database: "library", // 数据库名称
            username: "root",   // 数据库登录用户名
            password: "root",   // 数据库登录密码
            timezone: 'Asia/Shanghai', // 时间差
            // 时间格式 yyyy-MM-dd hh:mm:ss
            dialectOptions: {
                dateStrings: true,
                typeCast(field, next) {
                    // for reading from database
                    if (field.type === "DATETIME") {
                        return field.string();
                    }
                    return next();
                }
            },

            define: {
                freezeTableName: true,  // 禁止数据读写时给表赋别名(as)
                underscored: true, // 注意需要加上这个， egg-sequelize只是简单的使用Object.assign对配置和默认配置做了merge, 如果不加这个 update_at会被转变成 updateAt故报错
                // 禁止修改表名，默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数
                // 但是为了安全着想，复数的转换可能会发生变化，所以禁止该行为
                timestamps: false       // 为模型添加createdAt和updatedAt字段
            }
        },
        {
            delegate: 'model_prod', // 加载所有的模型到 app.model and ctx.model
            baseDir: 'model', // 要加载的模型目录`app/model/*.js`

            dialect: 'mysql',   // 数据库类型，支持 mysql，sqlite,mssql,pgsql,oracle
            host: "localhost",  // 数据库服务器地址
            port: 3306, // 数据库连接端口号
            database: "library_prod", // 数据库名称
            username: "root",   // 数据库登录用户名
            password: "root",   // 数据库登录密码
            timezone: 'Asia/Shanghai', // 时间差
            define: {
                freezeTableName: true,  // 禁止数据读写时给表赋别名(as)
                underscored: true,
                timestamps: false       // 为模型添加createdAt和updatedAt字段
            }
        }

    ]
};