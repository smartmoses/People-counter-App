


let count = 0
let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')

// let incrementBtn = document.getElementById('increment-btn')
// incrementBtn.addEventListener("click", increment);


function increment() {
    count += 1
    countEl.textContent = count
}   


function save() {

    // localStorage.setItem("my-number",countEl.innerText)

    let countStr = count + ' - '
    saveEl.textContent += countStr
  

    //alert('Your count have been saved')

    countEl.textContent = 0
    count = 0

   }





// let incrementBtn = document.getElementById('increment')

// function increment() {
//     alert('you just clicked the button')
//     console.log('this text is showing here because you just clicked on the increment button')
// }


