 function year( ) {
    function test() {
        document.getElementById("button") .onclick = function onclick(){
         const year = prompt("Введите возраст :")
            if(year > 100 ) {
              alert("Eror")
            }else if(year > 7 ){
                alert("Welcome to my Website")
            }else{
                alert("Eror")
            }
        }
}
    
    test()
}

year()










































// const valueInputNode = document.querySelector(".js-value-input");
// const curencySelectorNode = document.querySelector(".js-currency-selector");
// const outputNode  = document.querySelector(".js-output");


// function getInput() {
//     return {
//         rub: Number(valueInputNode.value),
//         currency: curencySelectorNode.value
//     }
// }



// function render(result) {
//     outputNode.innerText = result
// }

// valueInputNode.addEventListener('input' , function() {
//     const result = convert(getInput());

//     render(result)
// })