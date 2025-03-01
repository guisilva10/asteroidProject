import img from '../assets/eu.jpg'

const SobreMim = () => {
    return (
        <>
            <div style={{ width: '50%', margin: '20px auto', textAlign: 'center' }}>
                <h1>Thiago Da Silva Machado</h1>
                <div>
                    <img src={img} alt="" width={'200px'} style={{ borderRadius: '50px' }} />
                    <div>
                        <p>Hoje sou um atendente no Poupa Tempo RJ, onde cadastro os cidadãos que solicitam a CIN, o novo documento de identidade digital e integrado. Verifico os documentos necessários, realizo os dados biométricos e biográficos, emito o protocolo e esclareço as dúvidas sobre a CIN.</p>
                        <p>Além disso, estou cursando Análise e Desenvolvimento de Sistemas na Estácio, e Desenvolvedor Front-End na Tech4me. Antes de trabalhar no Poupa Tempo RJ, fui estagiário de TI no Governo do Estado do Rio de Janeiro, onde atendi, solucionei e acompanhei os chamados dos usuários, auxiliei na instalação e manutenção de equipamentos e softwares, e contribuí para a melhoria contínua dos processos e serviços de TI.</p>
                        <p>Meu objetivo é me desenvolver como profissional de TI, aplicando os conhecimentos adquiridos na graduação e no curso profissionalizante, e aprendendo novas tecnologias e metodologias. Sou apaixonado por inovação e solução de problemas. Busco sempre trabalhar em equipe, com ética, responsabilidade e comprometimento.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SobreMim;