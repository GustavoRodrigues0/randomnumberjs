function randomizer(){     //Function Randomizer
    //Add the input values
    var min = parseInt(document.getElementById('min').value)
    var max = parseInt(document.getElementById('max').value)
    //Randomize numbers
    var random = Math.floor(Math.random() * (max-min)) + min;
    //Label
    var label = document.getElementById('randomlabel');
    //inner the random value in label
    label.innerHTML = random;
    //Print the random number
    console.log(random)
}