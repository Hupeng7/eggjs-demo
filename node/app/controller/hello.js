'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：hello.js
 * 文件描述：会员接口
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

const Controller = require("./baseController");

/**
* @controller HelloService hello
*/
class HelloController extends Controller {
    /**
     * @summary hello world
     * @description hello world
     * @router get /v3/hello/index
     * @request query string name 姓名
     * @response 200 JsonResult 操作结果
     */
    async index() {
        const { ctx } = this;
        const name = ctx.query.name;
        var result = 'hello, egg! hello,world! hello,' + name;
        this.jsonBody({ result: result });
    }


    /**
     * @summary 编辑图书
     * @description 编辑图书
     * @router post /v1/hello/postBodyJson
     * @request body CreateOrUpdateBookDto modal 图书信息
     * @response 200 JsonResult 操作结果
     */
    async postBodyJson() {
        const { ctx, service } = this;
        //ctx.validate(ctx.rule.CreateOrUpdateBookDto);

        const param = ctx.request.body;
      
        const result = param.Name;

        this.jsonBody({result:result});
    }
}

module.exports = HelloController;