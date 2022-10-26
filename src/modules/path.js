const path = require("node:path")


// Basename
console.log(path.basename(__filename))

// Dirname - Diretório do arquivo
console.log(path.dirname(__filename))

// Extensão do arquivo
console.log(path.extname(__filename))

// Criar objeto path
console.log(path.parse(__filename))

// Juntar caminhos de arquivos
console.log(path.join(__dirname, "test"))