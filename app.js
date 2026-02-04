/******************************************************************************************
 * objetivo : calcular média Escolar 
 * Data:      29/02/2026
 * Autor:     Gabriel Sousa
 * Versão:    1.0
*******************************************************************************************/

// Importe da biblioteca
const readline = require('readline')

// Cria objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Coleta os dados solicitados 
entradaDeDados.question('Digite o nome do aluno: ', function (nome) {
    let nomeAluno = nome

    entradaDeDados.question('Digite a nota 1 :', function (valor1) {
        let nota1 = valor1

        entradaDeDados.question('Digite a nota 2 :', function (valor2) {
            let nota2 = valor2

            entradaDeDados.question('Digite a nota 3 :', function (valor3) {
                let nota3 = valor3

                entradaDeDados.question('Digite a nota 4 :', function (valor4) {
                    let nota4 = valor4

                    /*
                    Operadores lógicos
                    E - AND, &&
                    Ou - OR, ||
                    Não - NOT, !
                    */
                           /*
                            Conversões de tipos de dados
                                parseInt() -> Permite converter uma String para número INTEIRO
                                parseFloat() -> Permite converter uma String para número DECIMAL
                                Number() -> Permite converter uma String para NUMERO (INTEIRO OU DECIMAL)
                                String() -> Permite converter um conteúdo para STRING
                                Boolean() -> Permite converter um conteúdo para BOOLEANO
                                typeof() -> Permite verificar o tipo de dados da variável
                        
                        */ 
                    
                    //Validação de entrada vazia  
                    if (nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
                        console.log('ERRO: ')

                        // Validação de numeros entre 0 a 100    
                    } else if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100 ) {
                        console.log('ERRO: ')

                        //Validação para a entrada de letras nas notas 
                        //isNaN() -> permite validar se o conteúdo da 
                        //variável tem algum caracter ao inves do número
                    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
                        console.log('ERRO: ')

                    }else{
                        let statusAluno  
                        // Calculo da Média
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4 
                        
                        // Validação do Status de aprovação do aluno 
                        if(media < 50){
                            statusAluno = 'REPROVADO'

                        }else if(media == 50 && media  < 70){
                            statusAluno = 'RECUPERAÇÃO'
                        }else{
                            statusAluno = 'APROVADO'
                        
    
                        }

                        //Saída do boletim do aluno
                        console.log(`O aluno(a) ${nomeAluno} \n Média final: ${media.toFixed(2)} \n Status do aluno(a): ${statusAluno}`)

                    }

                    
                }) //Fecha nota4
            }) //Fecha nota3
        }) // Fecha nota2
     }) // Fecha nota1
}) // Fecha nome
