const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

let cont=0
let newQueue=''
rl.question('',(answer)=>{

    //Numero de niños=n
    //Tiempo=t
    const [n,t]=answer.split(' ').map(Number)

    rl.question('',answer2=>{
        let queue=answer2.toString()

        //Hace t veces el intercambio de B y G
        for (let p=0;p<t;p++){
            //Recorre queue bucando a un B que inmediatamente despues le siga G
            for (let i=0;i<queue.length;i++){
            
                if(queue[i]=='B' && queue[i+1]=='G'){
                    cont+=1
                    //Crea un nuevo string con los intercambios
                    newQueue+='G'+'B'
    
                    i+=1
                }
                else{
                    //Adiciona al string las demas letras
                    newQueue+=queue[i]
                }
            }
           //Ahora el queue pasa a ser el nuevo string que hallamos antes
            queue=newQueue
            //Borramos el nuevo string para comenzar de nuevo con el queue
            newQueue=''
        }
        
        console.log(queue)
      
        rl.close()
    })
    
    

    
})