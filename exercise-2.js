function balikString(kata){
    var str = '';
    
    for (var i = kata.length-1; i >= 0; i--){
        str += kata[i];
    }
    return str;
}

console.log(balikString('Hello World!'));