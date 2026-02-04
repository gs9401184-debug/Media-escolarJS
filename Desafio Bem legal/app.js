/******************************************************************************************
 * objetivo : Testar as minhas competências
 * Data:      29/02/2026
 * Autor:     Gabriel Sousa
*******************************************************************************************/

// Importe da biblioteca
const readline = require('readline')

// Cria objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('----------------------- Aura Store -----------------------')
// Coleta os dados solicitados 
entradaDeDados.question('Digite o nome do(a) cliente: ', function(nome){
    let nomeCliente = nome

    entradaDeDados.question('Digite o nome do produto: ', function(item){
        let produto = item

        entradaDeDados.question('Digite a taxa de juro do produto: ', function(taxa){
            let taxaJuros = taxa

            entradaDeDados.question('Digite o tempo de pagamento (em mês ou ano): ', function(tempo){
                let tempoPagamento = tempo




                
            })

        })

    })
})