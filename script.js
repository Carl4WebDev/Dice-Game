let randomNumber1 = Math.floor(Math.random() * 7) 
let randomNumber2 = Math.floor(Math.random() * 7) 

let imageSource1 = 'images/dice' + randomNumber1 + '.png';
$('.img1').attr('src', imageSource1)


let imageSource2 = 'images/dice' + randomNumber2 + '.png';
$('.img2').attr('src', imageSource2)


if(randomNumber1 > randomNumber2){
    $('h1').text("🚩 Play 1 Wins!")
} else if(randomNumber2 > randomNumber1){
    $('h1').text("🚩 Play 2 Wins!")
} else {
    $('h1').text("draw!")
}

if(randomNumber1 == 0){
    $('.img1').addClass('zero')
} else if(randomNumber2 == 0){
    $('.img2').addClass('zero')
}


console.log(randomNumber1)
console.log(randomNumber2)
console.log(imageSource1)
console.log(imageSource2)
