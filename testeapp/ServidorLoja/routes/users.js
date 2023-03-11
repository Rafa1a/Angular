var express = require('express');
var router = express.Router();
var crypto = require('crypto');

function getSenhaHex(senha) {
 const secret = "c4l4ng0p4ssw0rd";
 const hash = crypto.createHmac('sha256',secret)
 .update(senha).digest();
 return hash;
}
router.post('/', async(req, res) => {
 const login = req.body.login;
 const senha = getSenhaHex(req.body.senha);
 const nome = req.body.nome;
 const email = req.body.email;
 try {
 const doc = await global.db.createUser({login,senha,nome,email});
 res.send(doc);
 } catch (err) {
 res.send({resultado:"Erro ao Criar Usuario", mensagem: err});
 }
});
router.post('/login', async(req, res) => {
 const login = req.body.login;
 const senha = getSenhaHex(req.body.senha);
 try {
 const doc = await global.db.findUser(login,senha);
 res.send({login: doc.login, senha: "", 
 nome: doc.nome, email: doc.email});
 } catch (err) {
 res.send({resultado:"Erro no Login", mensagem: err});
 }
});

module.exports = router;
