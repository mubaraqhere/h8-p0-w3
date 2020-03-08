function groupAnimals(animals) {
    // you can only write your code here!
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let hasil = []
    
    for (let i = 0; i < alphabet.length; i++){
        let temp = []

        for (let j = 0; j < animals.length; j++){
            if (animals[j][0] === alphabet[i]){
                temp.push(animals[j])
            }
        }
        if (temp.length !=0){
            hasil.push(temp)
        }
    }
    return hasil
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]