import React from "react";
import img from "../assets/eu.jpg";

const SobreMim = () => {
  return (
    <div className="mx-auto max-w-3xl p-6 text-center">
      <h1 className="mb-4 text-3xl font-bold">Thiago Da Silva Machado</h1>
      <div className="flex flex-col items-center">
        <img
          src={img}
          alt="Thiago"
          className="mb-4 h-48 w-48 rounded-full shadow-lg"
        />
        <div className="space-y-4 text-lg text-gray-700">
          <p>
            Hoje sou um atendente no Poupa Tempo RJ, onde cadastro os cidadãos
            que solicitam a CIN, o novo documento de identidade digital e
            integrado. Verifico os documentos necessários, realizo os dados
            biométricos e biográficos, emito o protocolo e esclareço as dúvidas
            sobre a CIN.
          </p>
          <p>
            Além disso, estou cursando Análise e Desenvolvimento de Sistemas na
            Estácio, e Desenvolvedor Front-End na Tech4me. Antes de trabalhar no
            Poupa Tempo RJ, fui estagiário de TI no Governo do Estado do Rio de
            Janeiro, onde atendi, solucionei e acompanhei os chamados dos
            usuários, auxiliei na instalação e manutenção de equipamentos e
            softwares, e contribuí para a melhoria contínua dos processos e
            serviços de TI.
          </p>
          <p>
            Meu objetivo é me desenvolver como profissional de TI, aplicando os
            conhecimentos adquiridos na graduação e no curso profissionalizante,
            e aprendendo novas tecnologias e metodologias. Sou apaixonado por
            inovação e solução de problemas. Busco sempre trabalhar em equipe,
            com ética, responsabilidade e comprometimento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SobreMim;
