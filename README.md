#### eggjs demo
- 1.controller service 分层
- 2.schedule

#### 启动
- 测试：npm run dev  
  指定端口： egg-bin dev --port 7009
- 正式环境： npm run start-prod  停止 npm run stop-prod

#### eggjs sequelize 数据库字段对应需要指定field
`
  const Model = app.model.define('book', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "名称",
      field: 'Name'
    },
`


