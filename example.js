//https://codeforces.com/blog/entry/64707

//https://codeforces.com/problemset/customtest

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });


rl.question('',(answer)=>{
 
    rl.close()

    
})

//Solicitar varios INPUT

//Solicitar numero a partir de la cantidad de paradas
const solicitarNumero=()=>{
  rl.question('Ingrese a y b: ',answerAB=>{
    
      cont+=1
      //n numero de paradas
      if(cont<n){
          
          solicitarNumero()
      }
      else{
          //console.log(answeAB)
          rl.close()
      }
  })  
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // single line input
  readline.on('line', line => {
    readline.close(), console.log(line);
  });

  