const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });


    let contUpper=0
    let contLower=0
    rl.question('', (word)=>{

        for (let i in word){
            if(word[i]==word[i].toLocaleUpperCase()){
                //Cuenta cuantas mayusculas tiene   
                contUpper+=1
            }
            else{
                //Cuenta cuantas minusculas tiene
                contLower+=1
            }
            
        }
        if(contUpper>contLower){
            console.log(word.toLocaleUpperCase())
        }
    
        else{
            console.log(word.toLocaleLowerCase ())
        }
        rl.close()
        process.exit()
    })
    

    