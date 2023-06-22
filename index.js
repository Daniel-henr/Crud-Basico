const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const path = require('path');

const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//mecanismo de visualização handlebars

app.engine('handlebars', exphbs.engine());
app.set('view engine','handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

//renderização do handlebars

app.get('/login', (req, res) => {
    res.render('layouts/login');
});

app.get('/', (req, res) => {
    res.render('layouts/sorteio');
});

app.get('/cadastro', (req, res) => {
    res.render('layouts/cadastro');
});



app.post('/teste/insertteste', (req,res) =>{
    const nome  = req.body.name
    const email = req.body.email
    const senha = req.body.password

    const sql = `INSERT INTO login (nome,email,senha) VALUES ('${nome}','${email}', '${senha}')`
    conn.query(sql, function(err){
        if(err) {
            console.log(err);
        }
        res.redirect('/')
    })
})
//selecionar os arquivos 
app.get('/teste', (req,res) =>{
    const sql= "SELECT * FROM login"

    conn.query(sql, function (err,data){
        if(err) {
            console.log(err);
            return
        }
        const teste = data;
        console.log(teste);

        res.render('layouts/teste', {teste} );
    });
});

//selecionar a partir do id

app.get('/teste/:id', (req, res) => {
    const id = req.params.id

    const sql = `SELECT * FROM teste WHERE id=${id}`

    conn.query(sql, function (err,data){
        if(err) {
            console.log(err);
            return
        }
        const testes = data[0]

        res.render('layouts/teste', {teste} );
    })
})

//Editar os arquivos a partir de um ID
app.get('/testes/editar/:id', (req,res) =>{
    const id = req.params.id

    const sql = `SELECT * FROM teste WHERE id = ${id}`

    conn.query(sql, function(err,data){
        if(err) {
            console.log(err);
            return
        }
        const teste = data[0]

        res.render('layouts/editar', {teste})
    })
})

//atualizar a partir de um ID
app.post('/testes/editar/:id', (req, res) => {
    const id = req.params.id;
    const nome = req.params.id;

    const sql = `UPDATE teste SET nome = '${nome}' WHERE id = ${id}`;

    conn.query(sql, function(err) {
        if(err){
            console.log(err);
            return;
        }
        res.redirect('/teste');
    });
});
//excluir a partir do ID
app.post('/teste/excluir/:id', (req, res) => {
    const id = req.params.id;

    const sql =`DELETE FROM teste WHERE id = ${id}`

    conn.query(sql, function(err){
        if(err){
            console.log(err);
            return;
        }
        res.redirect('/teste');
    });
});

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'trabaio',
});

conn.connect(function(err) {
    if(err) {
        console.log(err);
    }
        console.log('Conectado ao MySQL');
        app.listen(2001);
});

