const HashMap = require("./hashmap");

function main() {
  let lor = new HashMap(undefined, 3, 0.5);

  lor.set("Hobbit", "Bilbo");
  lor.set("Hobbit", "Frodo");
  lor.set("Wizard", "Gandolf");
  lor.set("Human", "Aragon");
  lor.set("Elf", "Legolas");
  lor.set("Maiar", "The Necromancer");
  lor.set("Maiar", "Sauron");
  lor.set("RingBearer", "Gollum");
  lor.set("LadyOfLight", "Galadriel");
  lor.set("HalfEleven", "Arwen");
  lor.set("Ent", "Treebeard");

  console.log(lor._hashTable);

  let maiar = lor.get("Maiar");
  let hobbit = lor.get("Hobbit");

  console.log("Maiar", maiar);
  console.log("Hobbit", hobbit);
  console.log('capacity', lor._capacity);
}


function removeDuplicate(string) {
  //create hashmap
  let anyasHashmap = new HashMap(string.length);

  //split string into seperate chars
  let arrayOfChars = string.split('');

  //assign each char to the hashmap
  for(let i = 0; i < arrayOfChars.length; i++) {
    anyasHashmap.set(arrayOfChars[i], arrayOfChars[i]);
  }

  //console.log(anyasHashmap);
  //cocat each char to a string and return;
  let finalString = '';
  for(let i = 0; i < arrayOfChars.length; i++) {
    if(!finalString.includes(arrayOfChars[i])) {
      finalString += anyasHashmap.get(arrayOfChars[i]);
    }
  }
  console.log(finalString);
}


//removeDuplicate('google');

function palPerm(string) {
  let coolHash = new HashMap(string.length)
  //if sting.length is odd you get 1 free letter
  //else each char must have a matching char

  //break string into an array
  let stringArr = string.split('');
  //insert chars into hashmap

  stringArr.forEach((letter) => {
    //if char already in hashmap increment count;
    if(coolHash.get(letter)) {
      let currentVal = coolHash.get(letter);
      coolHash.set(letter, currentVal + 1);
    }
    else {
      coolHash.set(letter, 1);
    }
  })

  let count = 0;
  coolHash._hashTable.forEach((obj) => {
    if(obj.value % 2 === 0) {
      return;
    }
    else {
      count++;
    }
  })

  if(string.length % 2 === 0 && count > 0) {
    return false;
  }
  else if (string.length % 2 !== 0 && count > 1) {
    return false;
  }
  else {
    return true;
  }
}

console.log(palPerm("anya"));
console.log(palPerm('racecar'));
console.log(palPerm("ryan"));
console.log(palPerm("radar"));

