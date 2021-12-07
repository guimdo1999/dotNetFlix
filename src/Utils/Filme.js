const backCall = process.env.REACT_APP_API;

export const inserirFilme = async (dados) => {
  const inserir_filme = {
    titulo: dados.titulo,
    ano: dados.ano,
    duracao: dados.duracao,
    faixaEtaria: dados.faixaEtaria,
    genero: dados.genero,
  };
  return await fetch(backCall + "/api/Filmes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inserir_filme),
  }).then((resposta) => {
    return resposta.json().then((data) => data);
  });
};

export const pegarFilmes = async () => {
  return await fetch(backCall + "/api/Filmes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resposta) => {
    return resposta.json().then((data) => data);
  });
};

export const pegarIdFilme = async (id) => {
  return await fetch(backCall + "/api/Filmes/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resposta) => {
    return resposta.json().then((data) => data);
  });
};

export const atualizarIdFilme = async (id, dados) => {
  const atualizar_filme = {
    id: id,
    titulo: dados.titulo,
    ano: dados.ano,
    duracao: dados.duracao,
    faixaetaria: dados.faixaEtaria,
    genero: dados.genero,
  };
  return await fetch(backCall + "/api/Filmes/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(atualizar_filme),
  }).then((resposta) => {
    return resposta.json().then((data) => data);
  });
};

export const deletarIdFilme = async (id) => {
  return await fetch(backCall + "/api/Filmes/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resposta) => {
    return resposta.json().then((data) => data);
  });
};
