let paragrafo = document.querySelector('.paragrafo')
let text = document.querySelector('.text')
let text1 = document.querySelector('.text1')
let erro = document.querySelector('.erro')
let input = document.querySelector('input')
let user = document.querySelector(".user")
let user1 = document.querySelector(".user1")
let nota = document.querySelector(".nota")
let situacao = document.querySelector(".situacao")

const linguage = [
    {nome: 'João', nota: 1.4, situacao: 'Reprovado', sexo: 'masculino'},
    {nome: 'Eduarda', nota: 5.1, situacao: 'Recuperação', sexo: 'feminino'},
    {nome: 'Camila', nota: 10, situacao: 'Melhor Aluna', sexo: 'feminino'},
    {nome: 'Fabio', nota: 5.8, situacao: 'Recuperação' , sexo: 'masculino'},
    {nome: 'Kassandra', nota: 2.8 , situacao: 'Reprovada', sexo: 'feminino'},
    {nome: 'Thais', nota: 10, situacao: 'Aprovada', sexo: 'feminino' },
]

function search(){
    
    text.style.display = "none"
    text1.style.display = "block"

   for( let i = 0; i < linguage.length; i++){

    paragrafo.style.display = "block"
     
    if(input.value.toLowerCase() === linguage[i].nome.toLowerCase() & linguage[i].sexo === "feminino" ){        

        user.innerHTML = linguage[i].nome
        nota.innerHTML = linguage[i].nota
        situacao.innerHTML = linguage[i].situacao
        erro.style.display = "none"
        text.style.display = "flex"
        user.style.display = "block"
        user1.style.display = "none"
        text1.style.display = "none"


        if ((linguage[i].nota < 4) & (linguage[i].nota > 0)){
            situacao.style.color = "red"
            nota.style.color = "red"
         }

        else if (linguage[i].nota > 4 & (linguage[i].nota < 7)){
            situacao.style.color = "orange"
            nota.style.color = "orange"
         }

        else {
            situacao.style.color = "green"
            nota.style.color = "green"
        }
        

        break

    }  else if (input.value.toLowerCase() === linguage[i].nome.toLowerCase()) {

        user1.innerHTML = linguage[i].nome
        nota.innerHTML = linguage[i].nota
        situacao.innerHTML = linguage[i].situacao
        text.style.display = "none"
        user.style.display = "none"
        user1.style.display = "block"
        text1.style.display = "flex"
        erro.style.display = "none"

    
        if ((linguage[i].nota < 4) & (linguage[i].nota > 0)){
            situacao.style.color = "red"
            nota.style.color = "red"
         }

        else if (linguage[i].nota > 4 & (linguage[i].nota < 7)){
            situacao.style.color = "orange"
            nota.style.color = "orange"
         }

        else {
            situacao.style.color = "green"
            nota.style.color = "green"
        }
       
        break


    } else {
        paragrafo.style.display = "none"
        erro.style.display = "block"
    }

    

   }
  
   
   input.value = ""

   
   
}