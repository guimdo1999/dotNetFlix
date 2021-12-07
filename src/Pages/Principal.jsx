import React, { useEffect, useState } from "react";
import { List, Card, Button, Modal, Space } from "antd";
import { deletarIdFilme, pegarFilmes } from "../Utils/Filme";
import Formulario from "./Formulario";

const Principal = () => {
  const [filmesCard, setFilmesCard] = useState([]);
  const [carregar, setCarregar] = useState(false);
  const [visivel, setVisivel] = useState(false);
  const [form1, setForm1] = useState("");

  const handleOk = () => {
    setForm1("");
    setCarregar(true);
    setVisivel(false);
  };

  useEffect(() => {
    pegarFilmes().then((dados) => {
      setFilmesCard(dados);
      setCarregar(false);
    });
  }, [carregar]);

  return (
    <div>
      <Button
        style={{ margin: 20 }}
        type="primary"
        onClick={() => {
          setForm1(
            <Modal
              title={`Cadastrar filme`}
              visible={visivel}
              onCancel={() => {
                setForm1("");
                setCarregar(false);
              }}
              footer={null}
            >
              <Formulario pronto={handleOk} visible={visivel} />
            </Modal>
          );
          setVisivel(true);
          setCarregar(true);
        }}
      >
        Cadastrar Filme
      </Button>
      {form1}
      <List
        style={{ margin: 10 }}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={filmesCard}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.titulo}>
              <b>Genêro: </b>
              {item.genero}
              <p>Lançado em: {item.ano}</p>
              <p>Faixa etária: {item.faixaEtaria}</p>
              <h3>Duração de: {item.duracao}</h3>
              <Space>
                <Button
                  type="primary"
                  onClick={() => {
                    setForm1(
                      <Modal
                        title={`Edita: ${item.titulo}`}
                        visible={visivel}
                        onCancel={() => {
                          setForm1("");
                          setCarregar(false);
                        }}
                        footer={null}
                      >
                        <Formulario
                          objeto={item}
                          pronto={handleOk}
                          visible={visivel}
                        />
                      </Modal>
                    );
                    setVisivel(true);
                    setCarregar(true);
                  }}
                >
                  Editar
                </Button>
                <Button
                  type="primary"
                  danger
                  onClick={() => {
                    deletarIdFilme(item.id);
                    alert("Filme Deletado!");
                    handleOk();
                  }}
                >
                  Deletar
                </Button>
              </Space>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Principal;
