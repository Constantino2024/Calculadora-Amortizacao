const inputBox1 = document.getElementById('input-box-1')
const inputBox2 = document.getElementById('input-box-2')
const inputBox3 = document.getElementById('input-box-3')
const inputPrimeiro = document.getElementById('primeiro') //primeiro input
const inputSegundo = document.getElementById('segundo') //primeiro input
const inputTerceiro = document.getElementById('terceiro') //primeiro input
const simbolo1 = document.getElementById('simbolo1')
const simbolo2 = document.getElementById('simbolo2')
const simbolo3 = document.getElementById('simbolo3')
const botao = document.getElementById('botao')

botao.addEventListener('click', function(){

    //verificar se o primeiro input está vazio
    if(inputPrimeiro.value === ""){
        inputBox1.classList.add("muda-borda")
        simbolo1.classList.add("muda-simbolo")
    }
    if(inputSegundo.value === ""){
        inputBox2.classList.add("muda-borda")
        simbolo2.classList.add("muda-simbolo")
    }
    if(inputTerceiro.value === ""){
        inputBox3.classList.add("muda-borda")
        simbolo3.classList.add("muda-simbolo")
    }

})

inputPrimeiro.addEventListener('input', function(event){
    let inputValue = event.target.value

    if(inputValue !== ""){
        inputBox1.classList.remove("muda-borda")
        simbolo1.classList.remove("muda-simbolo")
    }
})
inputSegundo.addEventListener('input', function(event){
    let inputValue = event.target.value

    if(inputValue !== ""){
        inputBox2.classList.remove("muda-borda")
        simbolo2.classList.remove("muda-simbolo")
    }
})
inputTerceiro.addEventListener('input', function(event){
    let inputValue = event.target.value

    if(inputValue !== ""){
        inputBox3.classList.remove("muda-borda")
        simbolo3.classList.remove("muda-simbolo")
    }
})