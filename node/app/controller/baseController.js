'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：baseController.js
 * 文件描述：父控制器类
 * 创建时间：2019/10/28
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

const { Controller } = require("egg");

class BaseController extends Controller {
    /**
     * 返回Json格式响应数据
     * @param {*} result 数据体
     */
    jsonBody(resp) {
        var code = resp.code == null ? 2000 : resp.code;
        var message = resp.code == 2000 ? 'success' : resp.message;
        // var success = true;

        // if (typeof result.result === "boolean") success = result;
        // else success = result ? true : false;

        this.ctx.body = {
            code: code,
            message: message || '',
            //success: success,
            result: resp.result
        };
    }
};

module.exports = BaseController;