module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Post",
    {
      owner: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      part: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      contents: {
        type: DataTypes.STRING(140),
        allowNull: false,
      },
      postImageUrl: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    },
  );
};
