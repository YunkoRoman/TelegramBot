module.exports = (sequelize, DataTypes) => {
    return sequelize.define('ChatModel', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            text: {
                type: DataTypes.STRING
            },
            date: {
                type: DataTypes.DATE
            },
            authorId: {
                type: DataTypes.STRING
            },
            chatId: {
                type: DataTypes.STRING
            },
            checked: {
                type: DataTypes.BOOLEAN
            }
        },
        {
            tableName: 'chat',
            timestamps: false
        }
    )
};