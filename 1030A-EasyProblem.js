const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });


rl.question('',(answer)=>{
    const numeroPersonas=answer
    rl.question('',answer2=>{
        const [...valEncuesta]=answer2.split(' ').map(Number)
        
        if(valEncuesta.includes(1)){
            console.log('HARD')
        }
        else{
            console.log('EASY')
        }

        rl.close()
    })
    

    
})