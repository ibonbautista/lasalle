import { DataTypes } from "sequelize";
import connection from "../config/db.js";
import Player from "./players.js";
import Coach from "./coaches.js";
import Member from "./members.js";

const User = connection.define("users",{
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique:true
    },
    password: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('admin', 'coach', 'player', 'member'),
        allowNull: false,
    },
    in_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    update_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    out_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
})

User.hasOne(Player, { foreignKey: 'user_id' });
Player.belongsTo(User, { foreignKey: 'user_id' });

User.hasOne(Coach, { foreignKey: 'user_id' });
Coach.belongsTo(User, { foreignKey: 'user_id' });

User.hasOne(Member, { foreignKey: 'user_id' });
Member.belongsTo(User, { foreignKey: 'user_id' });


export default User;