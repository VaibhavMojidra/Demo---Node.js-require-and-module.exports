var answer="My name is Vaibhav Mojidra";

module.exports.ask= function(question){ //Exporting Multiple function with specific name syntax module.exports.<function name>=....
    console.log(question);
    return answer;
}