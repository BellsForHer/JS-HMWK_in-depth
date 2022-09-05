function superhero(name) {
    let powerLevel = Math.random() * 100;
    return function (catchPhrase) {
        console.log(`My name is ${name}. Power level is ${powerLevel} and ${catchPhrase}`)
    }
}

//Anonymous function - function w/out a name


let toiletManCatchPhrase = superhero("Toilet Paper Man");
toiletManCatchPhrase("I'm going to wipe the floor with you!");
toiletManCatchPhrase("Did someone say flush?!");
//Catchphrase in its own environment but it remembers its outer environment

// let batmanCatchPhrase = superhero("Batman");
// batmanCatchPhrase("I am vengeance!");

superhero("Batman")("I am vengeance!");