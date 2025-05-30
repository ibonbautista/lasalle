import { DataTypes } from "sequelize";
import connection from "../config/db.js";

const Player = connection.define("players",{
    
    player_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },

    team_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    nif: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true
    },
    gender: {
        type: DataTypes.ENUM('female', 'male'),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },

    surname1: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    surname2: {
        type: DataTypes.STRING(45),
        allowNull: false
    },

    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    phone: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(70),
        allowNull: false
    },
    position: {
        type: DataTypes.ENUM('point guard', 'shooting guard', 'small forward', 'power forward', 'center'),
        allowNull: false
    },
    height: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    hand: {
        type: DataTypes.ENUM('left-handed', 'right-handed'),
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('in', 'out'),
        allowNull: false
    }
})

export default Player;