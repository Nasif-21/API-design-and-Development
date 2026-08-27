import {DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User=sequelize.define('User',{
    id: {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },

    firstName:{
        type:DataTypes.STRING,
        allowNull:false,
    },

    lastName:{
        type: DataTypes.STRING,
        allowNull:false
    },

    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,

    },

    phoneNumber:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,

    },

    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"user"
    },
},
    {
    
        tableName:'users',
        timestamps:false,
    

});

export default User;
