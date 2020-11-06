'use strict';

const Subscription = require('egg').Subscription;
const moment = require('moment');

class WorkCron extends Subscription {
     // 这里编写我们要执行的任务代码, 我们这里就打印一下当前时间的试试
    async subscribe() {
        var nowStr = moment().format('YYYY-MM-DD HH:mm:ss');
        console.log("任务执行WorkCron : " + nowStr);
        //this.ctx.logger.info('all&&cron');
    }

    static get schedule() {
        return {
            cron: `0/5 * * * * *`,
            type: 'worker',
        };
    }
}

module.exports = WorkCron;
