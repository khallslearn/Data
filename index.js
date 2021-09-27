let count = 0
let countEl= document.getElementById("count-el")
let saveEl= document.getElementById("save-el")

function increment(){
 count += 1
countEl.innerText=count};

function save(){
  let countStr = count + " - "
  saveEl.textContent += countStr
countEl.innerText=0
count= 0
}


let myPoints = 3

function add3Points() { myPoints += 3

}

function remove1Point(){
  myPoints -= 1
}
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
console.log(myPoints);
