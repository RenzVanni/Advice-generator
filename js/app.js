async function jsonData() {
  try {
  const response = await fetch("https://api.adviceslip.com/advice?=" + Math.random())
  const data = await response.json()

  const adviceEl = document.querySelector("h1")
  const spanEl = document.querySelector("span")
  let myArr = []

  myArr.push({
    "id": data.slip.id,
    "advice": data.slip.advice
  })

  localStorage.setItem("advice", JSON.stringify(myArr))
  let localData = JSON.parse(localStorage.getItem("advice"))
    
    spanEl.innerHTML = localData[0].id
    adviceEl.innerHTML = `"${localData[0].advice}"`
  
  console.log(localData[0].id)
  } catch(e) {
    console.log(e)
  } 
}



const diceEl = document.querySelector("#dice")

diceEl.addEventListener("click", () => {
  jsonData()
})

jsonData()