const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });


rl.question('',(answer)=>{
    //answer recibe 2 parametros y necesitamos cada uno
     nk=answer.split(' ')
    let [n,k]=nk.map(Number)

    

     //Para obtener el último digito sabemos que el resto de dividir un
     //numero entre 10 es su último digito

    for (let i=1;i<=k;i++) {
    
        //Devuelve true si es cero
        digitZero=n%10==0

        //Si no es true
        if(!digitZero){
            n-=1
            
        }
        //es true
        else{
            n=n/10
        }
    }

    console.log(n)
    rl.close()

    
})

