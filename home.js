const message1 = document.querySelector("#Message-1")
const message2 = document.querySelector("#Message-2")
const send = document.querySelector("#send")
const names = document.querySelector("#name")

names.addEventListener('input', ()=>{
    message1.textContent = "You Enter: " + names.value
    return names.value
})

send.addEventListener("click", () =>{
    message1.textContent = ""
    message2.textContent = "you added: " + names.value
    names.value= ""
})