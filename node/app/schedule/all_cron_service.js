'use strict';

const Subscription = require('egg').Subscription;

const moment = require('moment');

class AllCronService extends Subscription {
      // 这里编写我们要执行的任务代码, 我们这里就打印一下当前时间 + 获取service层的数据库记录
    async subscribe() {
        const { ctx, service } = this;
        var nowStr = moment().format('YYYY-MM-DD HH:mm:ss');
        const now = new Date();
        const id = (now.getSeconds()) % 2;
        const result = await service.book.getById(id);
        const newReuslt = result ? ctx.helper.mapperToDto(result, ctx.rule.CreateOrUpdateBookDto) : {};
        console.log("任务执行AllCronService : nowStr ", nowStr, "result: ", newReuslt);

    }

    static get schedule() {
        return {
            cron: `0/3 * * * * *`,
            type: 'all',
        };
    }
}

module.exports = AllCronService;
