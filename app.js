const libreria = require("express")
const app = libreria()
const puerto = 5000
const name = "Felipe"
app.get(`/new`, (req, res) => res.status(200).json({msg: `Eres bienvenido al api ${name}`}))

function register() {
    let nombre = document.getElementById("firstName").value;
  
        for (let user of name) {
        if (name === user) {
            document.getElementById("firstName").value = "";
      }
    }
}


app.listen(puerto, () => console.log(`Ejecutando por el puerto`, puerto, `hola ${name},como estas?`))