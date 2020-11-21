module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Post",
    {
      // nickname: {
      //   type: DataTypes.STRING(30),
      //   allowNull: false,
      // },
      // part: {
      //   type: DataTypes.STRING(30),
      //   allowNull: false,
      // },
      title: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      contents: {
        type: DataTypes.STRING(140),
        allowNull: false,
      },
      postImageUrl: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      numberOfLikes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    },
  );
};
