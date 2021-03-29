function myFunction(){


var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numeric = [1,2,3,4,4,5,6,7,8,9];
var special = ["!","@","$","&"];



var passSelectLength = prompt("How Many characters is your password?");
var lower = confirm("Would you like a lower case character");
var upper = confirm("Would you like a uppercase character");
var specialChar = confirm("Would you like a special character");
var number = confirm("Would you like a number")
var newArray =[]
var finalArray = [];









if (lower == true && upper ==false && specialChar == false && number == false){
    for ( var i = 0; i < passSelectLength; i++){
        newArray.push(alphabet[Math.floor(Math.random() * alphabet.length)]) 
        }
}

if (upper == true && lower ==false && specialChar == false && number == false){
    for ( var i = 0; i < passSelectLength; i++){
        newArray.push(upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)]) 
        }
}

if (specialChar == true && lower ==false && lower == false && number == false){
    for ( var i = 0; i < passSelectLength; i++){
        newArray.push(special[Math.floor(Math.random() * special.length)]) 
        }
}


if (number == true && lower ==false && specialChar == false && lower == false){
    for ( var i = 0; i < passSelectLength; i++){
        newArray.push(numeric[Math.floor(Math.random() * numeric.length)]) 
        }
}

else if (lower ==true && upper == true && specialChar == false && number == false){

    for ( var i = 0; i < passSelectLength; i++){
        newArray.push(alphabet[Math.floor(Math.random() * alphabet.length)])
        newArray.push(upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)])
    }

}

else if (lower ==true && specialChar == true && upper == false && number == false){

for ( var i = 0; i < passSelectLength; i++){
    newArray.push(alphabet[Math.floor(Math.random() * alphabet.length)])
    newArray.push(special[Math.floor(Math.random() * special.length)])
}

}

else if (lower ==true && number == true && upper == false && specialChar == false){

for ( var i = 0; i < passSelectLength; i++){
    newArray.push(alphabet[Math.floor(Math.random() * alphabet.length)])
    newArray.push(numeric[Math.floor(Math.random() * numeric.length)])
}

}
//uppper numeric only numeric returning
else if (upper == true && lower == false && specialChar == false){
    // number == true &&
for ( var i = 0; i < passSelectLength; i++){
    newArray.push(upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)])
    newArray.push(numeric[Math.floor(Math.random() * numeric.length)])
}

}
/* Review this line returning special char only*/
else if (upper ==true && specialChar  == true && lower == false && number== false){

for ( var i = 0; i < passSelectLength; i++){
    newArray.push(upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)])
    newArray.push(special[Math.floor(Math.random() * special.length)])
}

}

else if (specialChar ==true && number == true && upper== false && lower== false){

for ( var i = 0; i < passSelectLength; i++){
    newArray.push(special[Math.floor(Math.random() * special.length)])
    newArray.push(numeric[Math.floor(Math.random() * numeric.length)])
}

}

else if (lower  && upper && specialChar == true && number == false){

for ( var i = 0; i < passSelectLength; i++){
    newArray.push(alphabet[Math.floor(Math.random() * alphabet.length)])
    newArray.push(upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)])
    newArray.push(special[Math.floor(Math.random() * special.length)])
}

}

else if (number  && upper && specialChar == true && lower == false){

for ( var i = 0; i < passSelectLength; i++){
    newArray.push(numeric[Math.floor(Math.random() * numeric.length)])
    newArray.push(upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)])
    newArray.push(special[Math.floor(Math.random() * special.length)])
}

}

else if (number  && upper && lower == true && specialChar  == false){

for ( var i = 0; i < passSelectLength; i++){
    newArray.push(numeric[Math.floor(Math.random() * numeric.length)])
    newArray.push(upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)])
    newArray.push(alphabet[Math.floor(Math.random() * alphabet.length)])
}

}

else if (number  && lower && specialChar == true && upper == false){

for ( var i = 0; i < passSelectLength; i++){
    newArray.push(numeric[Math.floor(Math.random() * numeric.length)])
    newArray.push(alphabet[Math.floor(Math.random() * alphabet.length)])
    newArray.push(special[Math.floor(Math.random() * special.length)])
}

}

else if (lower && upper && specialChar && number == true){

for ( var i = 0; i < passSelectLength; i++){
    newArray.push(alphabet[Math.floor(Math.random() * alphabet.length)])
    newArray.push(upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)])
    newArray.push(special[Math.floor(Math.random() * special.length)]) 
    newArray.push(numeric[Math.floor(Math.random() * numeric.length)]) 

}

}


if (passSelectLength >8 && passSelectLength < 128){
for ( var i = 0; i < passSelectLength; i++){
    finalArray.push(newArray[i])
}
}else
alert("Please select Password between 8 and 128 Characters")

document.getElementById("demo").innerHTML = finalArray.join("")




}

