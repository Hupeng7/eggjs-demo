'use strict';

const Subscription = require('egg').Subscription;

const now = new Date();
const start = (now.getSeconds() + 3) % 60;
const moment = require('moment');

class AllCron extends Subscription {
    async subscribe() {
        var nowStr = moment().format('YYYY-MM-DD HH:mm:ss');
        // 这里编写我们要执行的任务代码, 我们这里就打印一下当前时间的试试
        console.log("任务执行AllCron : " + nowStr);
        //this.ctx.logger.info('all&&cron');
    }

    static get schedule() {
        return {
            // cron: `${start}/30 * * * * *`,
            cron: `0/14 * * * * *`,
            type: 'all',
        };
    }
}

module.exports = AllCron;
