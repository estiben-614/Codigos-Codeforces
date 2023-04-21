const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

let cont=0
rl.question('',(answer)=>{
    
    let number=parseInt(answer)
    let distictYear=true
    let numerosIguales=0
    do{
        let numberString=(number+1).toString()


        for (let i=0; i<numberString.length;i++){
            //console.log('-',numberString[i])
            for(let k=i+1;k<numberString.length;k++){
                //Obtenemos todos los numeros despues cada numero
                //console.log(numberString[k])

                //Si despues de cada numero hay uno igual
                if(numberString[i]==numberString[k]){
                    numerosIguales+=1
                }
            }
            
        }

        //Si no hay ningun numero que se repita
        if(numerosIguales==0){
            console.log(numberString)
            distictYear=false
        }

        else{
            //Este fue el numero que descartamos antes y será al que se le sumará uno
            number=parseInt(numberString)

            //Reiniciamos el contador
            numerosIguales=0
        }

        
    }

    while(distictYear)
    rl.close()

    
})