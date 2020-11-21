module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "User",
    {
      //모델의 Attributes (Column)을 정의하는곳
      nickname: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      part: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      salt: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      //모델의 옵션들을 지정하는곳
      freezeTableName: true,
      timestamps: false,
    },
  );
};
