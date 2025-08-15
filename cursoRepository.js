import { connection } from "./connection.js";

// Primeira API
export async function listarAluno(registros) {
  const comando = 'SELECT * FROM alunoss' 
  const [linhas] = await registros.query(comando)
  return linhas
}
export async function filtrarPorNome(nome) {  //FILTRAR!!!!!!!!!!!!!!!!!!!!!!!!!!
  const comando = `
    SELECT * 
      FROM alunoss
     WHERE nm_aluno like ?
  `
  let [registros] = await connection.query(comando, ['%'+nome+'%']);
  return registros;
}
export async function consultarAluno(id) {     //CONSULTAR ID!!!!!!!!!!!!!!!!!!!!!!!!!
  const comando = `
    SELECT * 
      FROM alunoss
     WHERE id = ?
  `
  let [registros] = await connection.query(comando, [id]);
  return registros[0];
}
export async function inserirAluno(novoAluno) {
  const comando = `
    INSERT INTO alunoss (nm_aluno, bt_matricula, nm_curso, nn_email) values (?, ?, ?, ?)`
  let [aluninho] = await connection.query(comando, [novoAluno.nm_aluno, novoAluno.bt_matricula, novoAluno.nm_curso, novoAluno.nn_email])
  return aluninho.insertId;
}
export async function alterarAluno(id, novosDados) {   //ALTERAR INFORMAÇÕES!!!!!!!!!!!!!!!!!!!!!!!
  const comando = `
    UPDATE alunoss
       SET nm_aluno = ?,
           bt_matricula = ?,
           nm_curso = ?,
           nn_email = ?
     WHERE id = ?
  `
  let [info] = await connection.query(comando, [
    novosDados.nm_aluno,
    novosDados.bt_matricula,
    novosDados.nm_curso,
    novosDados.nn_email,
    id
  ])
}
export async function deletarAluno(id) {  //DELETAR ID !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const comando = `
    DELETE FROM alunoss
          WHERE id = ?
  `
  let [info] = await connection.query(comando, [id]);
}


// Segunda API
export async function listarEsporte(registros) {
  const comando = 'SELECT * FROM  esporte'
  const [show] = await registros.query(comando)
  return show
}
export async function filtrarPorNome(nome) {
  const comando = 'SELECT * FROM esporte WHERE nm_esporte like ?'
  let [registros] = await connection.query(comando, ['%'+nome+'%']);
  return registros;
}
export async function consultarEsporte(id) {     
  const comando = `SELECT * FROM esporte WHERE id = ?`
  let [registros] = await connection.query(comando, [id]);
  return registros[0];
}
export async function inserirEsporte(novoEsporte) {
  const comando =  'INSERT INTO esporte (nm_esporte, nm_melhor_jogador, bt_campeonato, bt_famoso, nmr_jogadores, regra_mais_importante, qunado_nasceu, pais_mais_jogado, tempo_partida, jogadores_partida) values (?,?,?,?,?,?,?,?,?,?)'
let [esportinho] = await connection.query(comando, [novoEsporte.nm_esporte, novoEsporte.nm_melhor_jogador, novoEsporte.bt_campeonato, novoEsporte.bt_famoso, novoEsporte.nmr_jogadores, novoEsporte.regra_mais_importante, novoEsporte.qunado_nasceu, novoEsporte.pais_mais_jogado, novoEsporte.tempo_partida, novoEsporte.jogadores_partida])
return esportinho
}
export async function alterarEsporte(id, novosDados) {  
  const comando = `
    UPDATE esporte
       SET nm_esporte = ?,
           nm_melhor_jogador = ?,
           bt_campeonato = ?,
           bt_famoso = ?,
           nmr_jogadores = ?,
           regra_mais_importante = ?,
           qunado_nasceu = ?,
           pais_mais_jogado = ?,
           tempo_partida = ?,
           jogadores_partida = ?
     WHERE id = ?
  `
  let [info] = await connection.query(comando, [
    novosDados.nm_esporte,
    novosDados.nm_melhor_jogador,
    novosDados.bt_campeonato,
    novosDados.bt_famoso,
    novosDados.nmr_jogadores,
    novosDados.regra_mais_importante,
    novosDados.qunado_nasceu,
    novosDados.pais_mais_jogado,
    novosDados.tempo_partida,
    novosDados.jogadores_partida,
    id
  ])
}
export async function deletarEsporte(id) {  
  const comando = `
    DELETE FROM esporte
          WHERE id = ?
  `
  let [info] = await connection.query(comando, [id]);
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
export async function filtrarPorNome(nome) {
  const comando = `
    SELECT * 
      FROM trabalhos_moto
     WHERE nm_aluno like ?
  `
  let [registros] = await connection.query(comando, ['%'+nome+'%']);
  return registros;
}
export async function consultarMoto(id) {     
  const comando = `SELECT * FROM trabalhos_motos WHERE id = ?`
  let [registros] = await connection.query(comando, [id]);
  return registros[0];
}
export async function alterarMoto(id, novosDados) {  
  const comando = `
    UPDATE trabalhos_moto
       SET placa_moto = ?,
           modelo = ?,
           descricao_trabalho = ?,
           data_entrada = ?,
           data_saida = ?,
           status = ?,
           valor = ?
     WHERE id = ?
  `
  let [info] = await connection.query(comando, [
    novosDados.placa_moto,
    novosDados.modelo,
    novosDados.descricao_trabalho,
    novosDados.data_entrada,
    novosDados.data_saida,
    novosDados.status,
    novosDados.valor,
    id
  ])
}
export async function deletarMoto(id) {  
  const comando = `
    DELETE FROM trabalhos_moto
          WHERE id = ?
  `
  let [info] = await connection.query(comando, [id]);
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
 export async function consultarPizza(id) {
  const comando = `
    SELECT * 
      FROM pizza
     WHERE id = ?
  `
  let [registros] = await connection.query(comando, [id]);
  return registros[0];
}
export async function filtrarPorNome(nome) {
  const comando = `
    SELECT * 
      FROM pizza
     WHERE nm_aluno like ?
  `
  let [registros] = await connection.query(comando, ['%'+nome+'%']);
  return registros;
}
export async function alterarPizza(id, novosDados) {
  const comando = `
    UPDATE pizza
       SET nome = ?,
       descricao = ?,
        preco = ?,
        tamanho = ?,
        vegetariana = ?
        ingredientes = ?,
        categoria = ?
     WHERE id = ?
  `
  let [info] = await connection.query(comando, [
    novosDados.nome,
    novosDados.descricao,
    novosDados.preco,
    novosDados.tamanho,
    novosDados.vegetariana,
    novosDados.ingredientes,
    novosDados.categoria,
    id
  ])
}
export async function deletarPizza(id) {
  const comando = `
    DELETE FROM pizza
          WHERE id = ?
  `
  let [info] = await connection.query(comando, [id]);
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
 export async function consultarFilmes(id) {
  const comando = `
    SELECT * 
      FROM filmess
     WHERE id = ?
  `
  let [registros] = await connection.query(comando, [id]);
  return registros[0];
}
export async function filtrarPorNome(nome) {
  const comando = `
    SELECT * 
      FROM filmess
     WHERE nome like ?
  `
  let [registros] = await connection.query(comando, ['%'+nome+'%']);
  return registros;
}
export async function alterarFilmes(id, novosDados) {
  const comando = `
    UPDATE filmess
       SET titulo = ?,
       ano_lancamento = ?,
        genero = ?,
        duracao_minutos = ?,
        diretor = ?,
        avaliacao = ?
     WHERE id = ?
  `
  let [info] = await connection.query(comando, [
    novosDados.titulo,
    novosDados.ano_lancamento,
    novosDados.genero,
    novosDados.duracao_minutos,
    novosDados.diretor,
    novosDados.avaliacao,
    id
  ])
}
export async function deletarFilme(id) {
  const comando = `
    DELETE FROM Filmess
          WHERE id = ?
  `
  let [info] = await connection.query(comando, [id]);
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
export async function consultarSeries(id) {
    const comando = `
      SELECT * 
        FROM series
       WHERE id = ?
    `
    let [registros] = await connection.query(comando, [id]);
    return registros[0];
  }
  export async function filtrarPorNome(nome) {
    const comando = `
      SELECT * 
        FROM series
       WHERE nome like ?
    `
    let [registros] = await connection.query(comando, ['%'+nome+'%']);
    return registros;
  }
  export async function alterarSeries(id, novosDados) {
    const comando = `
      UPDATE series
         SET titulo = ?,
         ano_lancamento = ?,
          genero = ?,
          temporadas = ?,
          criador = ?,
          avaliacao = ?
       WHERE id = ?
    `
    let [info] = await connection.query(comando, [
      novosDados.titulo,
      novosDados.ano_lancamento,
      novosDados.genero,
      novosDados.temporadas,
      novosDados.criador,
      novosDados.avaliacao,
      id
    ])
  }
  export async function deletarSeries(id) {
    const comando = `
      DELETE FROM series
            WHERE id = ?
    `
    let [info] = await connection.query(comando, [id]);
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
 export async function consultarLivros(id) {
    const comando = `
      SELECT * 
        FROM livros
       WHERE id = ?
    `
    let [registros] = await connection.query(comando, [id]);
    return registros[0];
  }
  export async function filtrarPorNome(nome) {
    const comando = `
      SELECT * 
        FROM livros
       WHERE nome like ?
    `
    let [registros] = await connection.query(comando, ['%'+nome+'%']);
    return registros;
  }
  export async function alterarLivro(id, novosDados) {
    const comando = `
      UPDATE livros
         SET titulo = ?,
         autor = ?,
          ano_publicacao  = ?,
          genero = ?,
          editora  = ?,
          preco = ?
       WHERE id = ?
    `
    let [info] = await connection.query(comando, [
      novosDados.titulo,
      novosDados.autor,
      novosDados.ano_publicacao,
      novosDados.genero,
      novosDados.editora,
      novosDados.preco,
      id
    ])
  }
  export async function deletarLivro(id) {
    const comando = `
      DELETE FROM livros
            WHERE id = ?
    `
    let [info] = await connection.query(comando, [id]);
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
export async function consultarCarros(id) {
    const comando = `
      SELECT * 
        FROM carros1
       WHERE id = ?
    `
    let [registros] = await connection.query(comando, [id]);
    return registros[0];
  }
  export async function filtrarPorNome(nome) {
    const comando = `
      SELECT * 
        FROM carros1
       WHERE nome like ?
    `
    let [registros] = await connection.query(comando, ['%'+nome+'%']);
    return registros;
  }
  export async function alterarCarro(id, novosDados) {
    const comando = `
      UPDATE carros1
         SET valor = ?,
         placa= ?,
          modelo  = ?,
          ano_fabricacao= ?,
          cor = ?,
          ar_condicionado = ?
       WHERE id = ?
    `
    let [info] = await connection.query(comando, [
      novosDados.valor,
      novosDados.placa,
      novosDados.modelo,
      novosDados.ano_fabricacao,
      novosDados.cor,
      novosDados.ar_condionado,
      id
    ])
  }
  export async function deletarCarros(id) {
    const comando = `
      DELETE FROM carros1
            WHERE id = ?
    `
    let [info] = await connection.query(comando, [id]);
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
  export async function consultarRoupas(id) {
    const comando = `
      SELECT * 
        FROM roupas
       WHERE id = ?
    `
  
    let [registros] = await connection.query(comando, [id]);
    return registros[0];
  }
  
  export async function filtrarPorNome(nome) {
    const comando = `
      SELECT * 
        FROM roupas
       WHERE nome like ?
    `
  
    let [registros] = await connection.query(comando, ['%'+nome+'%']);
    return registros;
  }
  
  export async function alterarRoupas(id, novosDados) {
    const comando = `
      UPDATE roupas
         SET nm_roupa = ?,
         nm_marca  = ?,
          bt_caro  = ?,
          bt_duradoura = ?,
          preco_roupa  = ?,
          pt_corpo  = ?,
          dt_fabricacao = ?
       WHERE id = ?
    `
  
    let [info] = await connection.query(comando, [
      novosDados.nm_roupa,
      novosDados.nm_marca,
      novosDados.bt_caro,
      novosDados.bt_duradoura,
      novosDados.preco_roupa,
      novosDados.pt_corpo,
      novosDados.dt_fabricacao,
      id
    ])
  }
  
  
  export async function deletarRoupas(id) {
    const comando = `
      DELETE FROM roupas
            WHERE id = ?
    `
  
    let [info] = await connection.query(comando, [id]);
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
export async function consultarAnimes(id) {
    const comando = `
      SELECT * 
        FROM animes
       WHERE id = ?
    `
    let [registros] = await conection.query(comando, [id]);
    return registros[0];
  }
  export async function filtrarPorNome(nome) {
    const comando = `
      SELECT * 
        FROM animes
       WHERE nome like ?
    `
    let [registros] = await conection.query(comando, ['%'+nome+'%']);
    return registros;
  }
  export async function alterarAnimes(id, novosDados) {
    const comando = `
      UPDATE animes
         SET nome = ?,
          genero = ?,
          episodios  = ?,
          ano_lancamento = ?,
          estudio  = ?,
          avaliacao = ?
       WHERE id = ?
    `
    let [info] = await conection.query(comando, [
      novosDados.nome,
      novosDados.genero,
      novosDados.episodios,
      novosDados.ano_lancamento,
      novosDados.estudio,
      novosDados.avaliacao,
      id
    ])
  }
  export async function deletarAnimes(id) {
    const comando = `
      DELETE FROM animes
            WHERE id = ?
    `
    let [info] = await connection.query(comando, [id]);
  }