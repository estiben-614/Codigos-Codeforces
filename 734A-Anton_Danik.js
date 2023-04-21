const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

let contAnton=0
let contDanik=0
rl.question('',(answer)=>{

    rl.question('',(winners)=>{
        
    //N numero de juegos
    //S string de quien ganó
        n=answer
        s=winners

        for (let i=0;i<s.length;i++){
    
        if(s[i]=='A'){
            contAnton+=1
        }
        else{
            contDanik+=1
        }
        }
        if(contAnton>contDanik){
            console.log('Anton')
        }
        else if( contAnton==contDanik){
            console.log('Friendship')
        }
        else{
            console.log('Danik')
        }
            rl.close()
        })   
})