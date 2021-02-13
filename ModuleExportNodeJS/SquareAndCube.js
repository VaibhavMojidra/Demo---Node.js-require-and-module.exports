var square = function(n){
    return n*n;
};

var cube = function(n){
    return n*n*n;
};

module.exports={ //Exporting Multiple function
    squareIt: square,  // <Function Name while calling in another file> : <Function to be exported>
    cubeIt:cube
}