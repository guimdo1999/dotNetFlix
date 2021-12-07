import React from "react";
import { Form, Input, Button } from "antd";
import { atualizarIdFilme, inserirFilme } from "../Utils/Filme";

function Formulario({ objeto, pronto }) {
  const layout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 12 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validarRequerido = {
    required: "${label} precisa ser preenchido!",
  };

  const onFinish = (values) => {
    if (!objeto) {
      inserirFilme(values);
      alert("Filme Adicionado" + values.titulo + ".");
      pronto();
    } else {
      console.log(objeto.id);
      atualizarIdFilme(objeto.id, values);
      alert("Filme Atualizado: " + values.titulo + ".");
      pronto();
    }
  };
  return (
    <Form
      style={{ margin: 20 }}
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validarRequerido}
      initialValues={{
        titulo: objeto?.titulo,
        genero: objeto?.genero,
        ano: objeto?.ano,
        faixaEtaria: objeto?.faixaEtaria,
        duracao: objeto?.duracao,
      }}
    >
      <Form.Item
        name={"titulo"}
        label="Título do filme"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name={"genero"} label="Gênero" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name={"ano"} label="Ano" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        name={"faixaEtaria"}
        label="Faixa Etária"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name={"duracao"} label="Duração" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Formulario;
