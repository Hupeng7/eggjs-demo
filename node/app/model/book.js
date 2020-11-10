/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

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
    Price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Author: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    MakeSource: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'MakeSource'
    },
    BookCategoryId: {
      type: DataTypes.STRING(128),
      allowNull: false,
      field: 'BookCategoryId'
    },
    Inventory: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    IsDeleted: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'IsDeleted'
    },
    IsSoldOut: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'IsSoldOut'
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'CreatedDate'
    },
    UpdatedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'UpdatedDate'
    }
  }, {
      tableName: 'book'
    });

  Model.associate = function () {

  }

  return Model;
};
