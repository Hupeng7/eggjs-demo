'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：log_util.js
 * 文件描述：会员接口
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

const Controller = require("./baseController");

/**
* @controller LogService log util
*/
class LogController extends Controller {
    /**
     * @summary log util
     * @description log util
     * @router get /v3/log
     * @response 200 JsonResult 操作结果
     */
    async logShow() {
        const { ctx, service } = this;

        ctx.logger.debug("debug info!!!");
        ctx.logger.info("some request data:%j",ctx.request.body);
        ctx.logger.warn("warnning!!!");
        ctx.logger.error(new Error('run error!!!'));
        this.jsonBody({ code: 2000, result: "newReuslt" });
    }
}

module.exports = LogController;