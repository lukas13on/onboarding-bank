"use client";

import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputSwitch } from "primereact/inputswitch";
import { Col, Row } from "reactstrap";
import { Card } from "primereact/card";

type TipoPessoa = "fisica" | "juridica";

export default function RegisterWidget() {
  const [nome, setNome] = useState("");
  const [documento, setDocumento] = useState("");
  const [email, setEmail] = useState("");
  const [confimarSenha, setConfirmarSenha] = useState("");
  const [senha, setSenha] = useState("");
  const [tipoPessoa, setTipoPessoa] = useState<TipoPessoa>("fisica");

  const register = async () => {};

  return (
    <div className="bg-light vh-100">
      <section className="p-4">
        <div className="container">
          <h1 className="text-center text-md-start">Abra sua conta</h1>
          <p className="text-center text-md-start text-muted">
            Preencha os campos abaixo para criar sua conta
          </p>
        </div>
      </section>
      <section className="container">
        <Row>
          <Col xs={12} md={6}>
            <div>
              <h4>Nome completo</h4>
              <p className="text-muted small">
                Insira seu nome completo assim como consta em seu documento
              </p>
              <InputText
                className="w-100"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                id="nome"
              />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <h4>Tipo de pessoa</h4>
              <p className="text-muted small">Selecione o tipo de pessoa</p>
              <div className="d-flex">
                <div className="d-flex m-auto flex-column">
                  <div className="d-flex flex-grow-1">
                  <InputSwitch
                    checked={tipoPessoa === "juridica"}
                    onChange={(e) =>
                      setTipoPessoa(e.value ? "juridica" : "fisica")
                    }
                  />
                  </div>
                  <div className="d-flex flex-grow-1">Juridica</div>
                </div>
                <div className="d-flex m-auto flex-column">
                  <div className="d-flex flex-grow-1">
                    <InputSwitch
                      checked={tipoPessoa === "fisica"}
                      onChange={(e) =>
                        setTipoPessoa(e.value ? "fisica" : "juridica")
                      }
                    />
                  </div>
                  <div className="d-flex flex-grow-1">Fisica</div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <h4>Documento</h4>
              <p className="text-muted small">Insira seu CPF ou CNPJ</p>
              <InputText
                className="w-100"
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
                id="documento"
              />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <h4>Endereço de email</h4>
              <p className="text-muted small">Insira um email válido</p>
              <InputText
                className="w-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
              />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <h4>Senha de acesso</h4>
              <p className="text-muted small">Insira uma senha de acesso</p>
              <InputText
                className="w-100"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                id="senha"
              />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <h4>Confirmar senha</h4>
              <p className="text-muted small">Confirme a senha de acesso</p>
              <InputText
                className="w-100"
                value={confimarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                id="confirmar-senha"
              />
            </div>
          </Col>
        </Row>
        <hr className="border-gray" />
        <Card className="my-2">
          <Row>
            <Col>
              <div>
                <h4>Muita atenção!</h4>
                <p className="text-muted">
                  Seu cadastro está sujeito a analise de crédito e aprovação de
                  abertura de conta.
                </p>
              </div>
            </Col>
          </Row>
        </Card>
        <Row>
          <Col>
            <div className="d-flex justify-content-end">
              <Button label="Abrir minha conta" onClick={register} />
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}
