module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("ad", {
    headline: Sequelize.STRING,
    url: Sequelize.STRING,
    managerId: Sequelize.INTEGER
  }//,
  // {
  //   instanceMethods: {
  //     shout: function(){
  //       console.log("My name is " + this.name);
  //     }
  //   }
  // }
  );
  // model.sing = function(){
  //   console.log("Tra la la!");
  // };
  return model;
};