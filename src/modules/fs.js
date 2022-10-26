const fs = require('fs')
const path = require('path')

// Criar uma pasta
// fs.mkdir(path.join(__dirname, '/test'), error => {
//   if (error) {
//     return console.log("Error: ", error)
//   }

//   console.log("Pasta criada com sucesso!")
// })

// Adicionar a um arquivo
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'Hello Node', (error) => {
  if (error) {
    return console.log("error: ", error)
  }

  console.log("Arquivo criado com sucesso!")
}, fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'hello worldede', (error) => {
  if (error) {
    return console.log("error: ", error)
  }

  console.log("Arquivo alterado com sucesso!")
}), fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf-8', (error, data) => {
  if (error) {
    return console.log("error: ", error)
  }

  console.log(data)
}))

// Adicionar conteúdo, mantendo o conteúdo já existente


// Ler um arquivo
