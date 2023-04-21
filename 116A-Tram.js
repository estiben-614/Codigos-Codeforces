const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

let cont=0
let personasEnTren=[]
let personasAbordo=0
rl.question('Ingrese la cantidad de paradas: ',(answer)=>{
     //Cantidad de paradas (answer)
    n=parseInt(answer)
    solicitarNumero() 
})

//Solicitar numero a partir de la cantidad de paradas
const solicitarNumero=()=>{
    rl.question('Ingrese a y b: ',answerAB=>{
        //  a= Personas que salen , b=Personas que entran
        let [a,b]=answerAB.split(' ').map(Number)
        cont+=1
        personasAbordo+=(b-a)
        personasEnTren.push(personasAbordo)
        if(cont<n){
            
            solicitarNumero()
        }
        else{
            //console.log(personasEnTren)
            console.log(Math.max(...personasEnTren))
            rl.close()
        }
    })  
}