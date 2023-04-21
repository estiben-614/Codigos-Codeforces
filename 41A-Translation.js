const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

cont=0
rl.question('',(answer)=>{
    const berlandWord=answer.toString()
    rl.question('',answer2=>{
        const birlandWord=answer2.toString()
        for (let i=0;i<birlandWord.length;i++){
            //Indice para la palabra birlanWord
            let b=birlandWord.length-(i+1)
            //console.log(b)
            if(berlandWord[i]==birlandWord[b]){
                cont+=1
            }   

        }
        if(cont==berlandWord.length){
            console.log('YES')
        }

        else{
            console.log('NO')
        }
        rl.close()
    })
 
    

    
})

