require('./instantHello'); //Demo for require function
var add= require('./../ModuleExportNodeJS/addNums'); //loads the function from the addNums js
add(1,2);//calling the method

var calc=require('./../ModuleExportNodeJS/SquareAndCube');
var sq=calc.squareIt(2); //Calling function from another file

console.log(sq);

var q=require('./../ModuleExportNodeJS/Question');
var ans=q.ask("Whats my name?");

console.log(ans);

