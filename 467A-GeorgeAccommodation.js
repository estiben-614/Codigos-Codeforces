const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });


rl.question('',(answer)=>{
    //numero de habitaciones
    n=parseInt(answer)

    solicitarInputs()
    

    
})

let cont=0
let habitacionesDisponibles=0
solicitarInputs=()=>{
    rl.question('',answer2=>{
        cont+=1
        //Personas que viven en la habitacion=p
        //Capacidad de la habitacion=q
        const [p,q]=answer2.split(' ').map(Number)
        //console.log(p,q)

        if(q-p>=2){
            habitacionesDisponibles+=1
        }
        if(cont<n){
            solicitarInputs()
        }
        else{
            console.log(habitacionesDisponibles)
            rl.close()
        }


    })
}