import { connection } from "./connection.js";

// Primeira API
export async function listarAluno(registros) {
  const comando = 'SELECT * FROM alunoss' 
  const [linhas] = await registros.query(comando)
  return linhas
}
export async function inserirAluno(novoAluno) {
  const comando = `
    INSERT INTO alunoss (nm_aluno, bt_matricula, nm_curso, nn_email) values (?, ?, ?, ?)`
  let [aluninho] = await connection.query(comando, [novoAluno.nm_aluno, novoAluno.bt_matricula, novoAluno.nm_curso, novoAluno.nn_email])
  return aluninho.insertId;
}
// Segunda API
export async function listarEsporte(registros) {
  const comando = 'SELECT * FROM  esportes'
  const [show] = await registros.query(comando)
  return show
}
export async function inserirEsporte(novoEsporte) {
  const comando =  'INSERT INTO esporte (nm_esporte, nm_melhor_jogador, bt_campeonato, bt_famoso, nmr_jogadores, regra_mais_importante, qunado_nasceu, pais_mais_jogado, tempo_partida, jogadores_partida) values (?,?,?,?,?,?,?,?,?,?)'
let [esportinho] = await connection.query(comando, [novoEsporte.nm_esporte, novoEsporte.nm_melhor_jogador, novoEsporte.bt_campeonato, novoEsporte.bt_famoso, novoEsporte.nmr_jogadores, novoEsporte.regra_mais_importante, novoEsporte.qunado_nasceu, novoEsporte.pais_mais_jogado, novoEsporte.tempo_partida, novoEsporte.jogadores_partida])
return esportinho
}
// terceira API
export async function listarMotos(registros) {
  const comando = 'SELECT * FROM  trabalhos_motos'
  const [show] = await registros.query(comando)
  return show
}
export async function inserirMoto(novaMoto) {
  const comando = 'INSERT INTO trabalhos_moto (placa_moto, modelo, descricao_trabalho, data_entrada, data_saida, status, valor) values (?,?,?,?,?,?,?)'
  let [motinho] = await connection.query(comando, [novaMoto.placa_moto, novaMoto.modelo, novaMoto.descricao_trabalho, novaMoto.data_entrada, novaMoto.data_saida, novaMoto.status, novaMoto.valor])
  return motinho
}
// Quarta API
export async function listarPizza(registros) {
  const comando = 'SELECT * FROM pizza'
  const [show] = await registros.query(comando)
  return show
}
export async function inserirPizza(novaPizza) {
  const comando = 'INSERT INTO pizza (nome, descricao, preco, tamanho, vegetariana, ingredientes, categoria) values (?,?,?,?,?,?,?)'
  let [pizzinha] = await connection.query(comando, [novaPizza.nome, novaPizza.descricao, novaPizza.preco, novaPizza.tamanho, novaPizza.vegetariana, novaPizza.ingredientes, novaPizza.categoria])
  return pizzinha
}
// Quinta API
export async function listarFilmes(registros) {
  const comando = 'SELECT * FROM filmes'
  const [show] = await registros.query(comando)
  return show
}
export async function inserirFilme(novofilme) {
  const comando =   'INSERT INTO filmes (titulo, ano_lancamento, genero, duracao, diretor, avaliacao) values (?,?,?,?,?,?)'
  let [filminho] = await connection.query(comando, [novofilme.titulo, novofilme.ano_lancamento, novofilme.genero, novofilme.duracao, novofilme.diretor, novofilme.avaliacao])
  return filminho
}
// Sexta API
export async function listarSeries(registros) {
  const comando = 'SELECT * FROM series'
  const [show] = await registros.query(comando)
  return show
}
export async function inserirSerie(novaSerie){
  const comando = 'INSERT INTO series (titulo, ano_lancamento, genero, temporadas, criador, avaliacao) values (?,?,?,?,?,?)'
  let [serizinha] = await connection.query(comando, [ novaSerie.titulo, novaSerie.ano_lancamento, novaSerie.genero, novaSerie.temporadas, novaSerie.criador, novaSerie.avaliacao])
  return serizinha
}
// Sétima API
export async function listarLivro(registro) {
  const comando = 'SELECT * FROM livros'
  let [show] = await registro.query(comando)
  return show
}
export async function inserirLivro(novoLivro) {
  const comando = 'INSERT INTO livros (titulo, autor, ano_publicacao, genero, editora, preco) values (?,?,?,?,?,?)'
  let [livrinho] = await connection.query(comando, [novoLivro.titulo, novoLivro.autor, novoLivro.ano_publicacao, novoLivro.genero, novoLivro.editora, novoLivro.preco])
  return livrinho
}
// Oitava API
export async function listarCarros(registro) {
  const comando = 'SELECT * FROM carros1'
  let [show] = await registro.query(comando)
  return show
}
export async function inserirCarro(novoCarro) {
const comando = 'INSERT INTO carros1 (valor, placa, modelo, ano_fabricacao, cor, ar_condicionado) values (?,?,?,?,?,?)'
let [carrinho] = await connection.query(comando, [novoCarro.valor, novoCarro.placa, novoCarro.modelo, novoCarro.ano_fabricacao, novoCarro.cor, novoCarro.ar_condionado])
return carrinho
}
// Nona API
export async function listarRoupas(registro) {
  const comando = 'SELECT * FROM roupas'
  let [show] = await registro.query(comando)
  return show
}
export async function inserirRoupa(novaRoupa) {
  const comando = 'INSERT INTO roupas (nm_roupa, nm_marca, bt_caro, bt_duradoura, preco_roupa, pt_corpo, dt_fabricacao) values (?,?,?,?,?,?,?)'
  let [roupinha] = await connection.query(comando, [novaRoupa.nm_roupa, novaRoupa.nm_marca, novaRoupa.bt_caro, novaRoupa.bt_duradoura, novaRoupa.preco_roupa, novaRoupa.pt_corpo, novaRoupa.dt_fabricacao])
  return roupinha
}
// Décima API
 export async function listarAnimes(registro) {
  const comando = 'SELECT * FROM animes'
  let [show] = await registro.query(comando)
  return show
 }
 export async function inserirAnimes(novoAnime) {
  const comando = 'INSERT INTO animes (nome, genero, episodios, ano_lancamento, estudio, avaliacao) values (?,?,?,?,?,?)'
  let [animezinho] = await connection.query(comando, [novoAnime.nome, novoAnime.genero, novoAnime.episodios, novoAnime.ano_lancamento, novoAnime.estudio, novoAnime.avaliacao])
  return animezinho
 }