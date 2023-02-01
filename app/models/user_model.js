// module.exports = (sequelize,DataTypes)=>{
//     const Users = sequelize.define("user_module",{
//         name:{
//             type:DataTypes.STRING,
//             allowNull: false
//         },
//         email:{
//                type:DataTypes.STRING,
//                unique: true,
//                allowNull: false,
//                validate:{
//                   isEmail: {msg: "It must be a valid Email address"},
//                 }
//             },
//         gender:{
//             type:DataTypes.STRING,
//             allowNull: false,
//         },
//         phoneno:{
//             type:DataTypes.INTEGER,
//             allowNull: false,
//             unique: true
//         },
//         password:{
//             type:DataTypes.STRING,
//             allowNull: false,
//             freezeTableName: true,
//             instanceMethods: {
//                 generateHash(password) {
//                     return bcrypt.hash(password, bcrypt.genSaltSync(8));
//                 },
//                 validPassword(password) {
//                     return bcrypt.compare(password, this.password);
//                 }
//             }
//         },
//         Image :{
//             type:DataTypes.STRING,
//             allowNull: false,
//         },
//         city:{
//             type:DataTypes.STRING,
//             allowNull: false,
//         },           
//         },{
//              timestamps:false
//         })

// return Users
// }

module.exports = (sequelize,Sequelize)=>{
    const User = sequelize.define('userData',{
        name:{
            type: Sequelize.STRING,
        },
        email:{
            type: Sequelize.STRING,
        },
        gender:{
            type: Sequelize.STRING,
            enum:['male','female']  
        },
        password:{
            type:Sequelize.STRING,
        },
        uploadImage:{
            type:Sequelize.STRING,
        }
    },
        {
            timestamps: false  
        })
        return User;
}




       

    
       
  
