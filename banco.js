const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database('./mock.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message); 
    console.log("conectado com sucesso");

});

db.run('CREATE TABLE IF NOT EXISTS alunos()')

db.close((err) => {
    if (err) return console.log(err.message);
});  