import { listarAluno, inserirCurso, deletarAluno, consultarEsporte, deletarEsporte, alterarMoto } from "./cursoRepository.js"

import express from 'express'
const api = express();
api.use(express.json());


// Primeira API ----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
api.get('/aluno', async (req, resp) => {
  let registros = await listarAluno();
  resp.send(registros);
})
api.get('/aluno/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filtrarPorNome(nome);
  resp.send(registros);
})
api.post('/aluno', async (req, resp) => {
  let novoCurso = req.body;
  let id = await inserirCurso(novoCurso);
  resp.send({
    novoId: id
  })
})
api.put('/aluno/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;
  await alterarAluno(id, novosDados);
  resp.send();
})
api.delete('/aluno/:id', async (req, resp) => {
  let id = req.params.id;
  await deletarAluno(id);
  resp.send();
})

// Segunda API -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
api.get('/esporte', async (req, resp) => {
  let registros = await listarEsporte();
  resp.send(registros)
})
api.get('/esporte/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filtrarPorNome(nome);
  resp.send(registros);
})
api.get('/esporte/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await consultarEsporte(id);
  resp.send(registros);
})
api.post ('/eporte', async (req, resp) => {
  let novoEsporte = req.body;
  let id = await inserirEsporte(novoEsporte)
  resp.send({
    novoId: id
  })
})
api.put('/esporte/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;
  await alterarEsporte(id, novosDados);
  resp.send();
})
api.delete('/esporte/:id', async (req, resp) => {
   let id = req.params.id;
  await deletarEsporte(id);
  resp.send();
})


//Terceira API -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
api.get('/motos', async (req, resp) => {
  let registros = await listarMotos();
  resp.send(registros)
})
api.post('/motos', async (req,resp) => {
  let novaMoto = req.body;
  let id = await inserirMoto(novaMoto)
  resp.send({
    novoId: id
  })
})
api.get('/motos/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filtrarPorNome(nome);
  resp.send(registros);
})
api.get('/motos/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await consultarMoto (id);
  resp.send(registros);
})
api.put('/motos/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;
  await alterarMoto(id, novosDados);
  resp.send();
})
api.delete('/moto/:id', async (req, resp) => {
   let id = req.params.id;
  await deletarMoto(id);
  resp.send();
})

// Quarta API ------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
api.get('/pizza', async (req, resp) => {
  let registros = await listarPizza()
  resp.send(registros)
})
api.post('/pizza', async (req, resp)=> {
let novaPizza = req.body;
let id = await inserirPizza(novaPizza)
resp.send ({
  novoId: id
})
})
api.get('/pizza/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filtrarPorNome(nome);
  resp.send(registros);
})
api.get('/aluno/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await consultarAluno(id);
  resp.send(registros);
})
// Quinta API
api.get ('/filmes', async (req, resp)=>{
  let registros = await listarFilmes()
  resp.send(registros)
})
api.post('/filmes', async (req, resp)=>{
  let novofilme = req.body;
 let id = await inserirFilme(novofilme)
 resp.send({
  novoId: id
 }) 
})
// Sexta Api 
api.get ('/series', async (req, resp) => {
  let registros = await listarSeries()
  resp.send(registros)
})
api.post ('/series', async (req, resp)=> {
  let novaSerie = req.body;
  let id = await inserirSerie(novaSerie)
  resp.send ({
    novoId: id
  })
})
// Sétima API
api.get ('/livros', async (req, resp) => { 
let registros = await listarLivro()
resp.send(registros)
})
api.post ('/livros', async (req, resp) =>{
  let novoLivro = req.body;
  let id = await inserirLivro(novoLivro)
  resp.send ({
    novoId: id
  })
})
// Oitava API 
api.get ('/carros', async (req, resp)=> {
  let registros = await listarCarros()
  resp.send(registros)
})
api.post ('/carros', async (req, resp) => {
let novoCarro = req.body;
let id = await inserirCarro(novoCarro)
resp.send ({
  novoId: id
})
})
// Nona API
api.get ('/roupas', async (req, resp)=> {
  let registro = await listarRoupas()
  resp.send(registro)
})
api.post('/roupas', async (req, resp)=> {
  let novaRoupa = req.body;
  let id = await inserirRoupa(novaRoupa)
  resp.send({
    novoId: id
  })
})
// Décima API
api.get('/animes', async (req, resp) => {
  let registro = await listarAnimes()
  resp.send(registro)
})
api.post('/animes', async (req, resp)=>{
  let novoAnime = req.body;
  let id = await inserirAnimes(novoAnime)
  resp.send ({
    novoId: id
  })
})
api.listen(5010, () => console.log('..: API subiu com sucesso!'));