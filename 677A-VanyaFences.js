const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const { Console } = require('console');

const rl = readline.createInterface({ input, output });

let widthRoad=0
rl.question('',(answer)=>{
    //Recuperamos de answer
    //Numero de amigos =n
    //Altura cerca=h
    const [n,h]=answer.split(' ').map(Number)

    rl.question('',answer2=>{

        //Almacena en alturasPersonas todas las alturas
        //Que se introdujeron en answer2
        const [...alturasPersonas]=answer2.split(' ').map(Number)

        //Recordar que alturasPersonas es un array
        for (i in alturasPersonas){

            //Si la h de la cerca es mejor que la altura de la persona
            if(h<alturasPersonas[i]){
                widthRoad+=2
            }

            else{
                widthRoad+=1
            }
        }

        console.log(widthRoad)
        rl.close()
    })
    

    
})