import React, { useState } from 'react';

function App() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    <Slide bg="#e6f2ff">
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Integração de Direito Cibernético nas Práticas de Desenvolvimento de Software</h1>
      <p style={{ fontSize: '18px' }}>Um Estudo de Caso na AtkinsRealis</p>
    </Slide>,
    <Slide>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Situação-Problema</h2>
      <ul style={{ textAlign: 'left', paddingLeft: '24px' }}>
        <li>Falta de integração entre desenvolvimento e compliance legal</li>
        <li>Desconhecimento das implicações legais em projetos de software</li>
        <li>Dificuldade na implementação prática de requisitos de segurança cibernética</li>
        <li>Comunicação ineficiente entre departamentos</li>
      </ul>
    </Slide>,
    <Slide>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Objetivos do Projeto</h2>
      <ol style={{ textAlign: 'left', paddingLeft: '24px' }}>
        <li>Capacitar 100% da equipe de desenvolvimento PHP em direito cibernético</li>
        <li>Implementar processo de revisão de código focado em segurança e conformidade legal</li>
        <li>Desenvolver guia prático de "Desenvolvimento Seguro e Conforme"</li>
      </ol>
    </Slide>,
    <Slide>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Metodologia</h2>
      <ul style={{ textAlign: 'left', paddingLeft: '24px' }}>
        <li>Treinamentos interativos em direito cibernético</li>
        <li>Workshops colaborativos para desenvolvimento de processos</li>
        <li>Sistema de mentoria interdepartamental</li>
        <li>Avaliação contínua e ajustes baseados em feedback</li>
      </ul>
    </Slide>,
    <Slide>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Avaliação dos Resultados</h2>
      <ul style={{ textAlign: 'left', paddingLeft: '24px' }}>
        <li>Testes pré e pós-treinamento</li>
        <li>Análise de vulnerabilidades antes e depois da implementação</li>
        <li>Pesquisas de uso do guia prático</li>
        <li>Entrevistas com membros-chave de cada departamento</li>
      </ul>
    </Slide>,
    <Slide bg="#e6ffe6">
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Benefícios Esperados</h2>
      <ul style={{ textAlign: 'left', paddingLeft: '24px' }}>
        <li>Redução de vulnerabilidades legais e de segurança</li>
        <li>Melhoria na comunicação interdepartamental</li>
        <li>Fortalecimento da reputação da AtkinsRealis</li>
        <li>Desenvolvimento de software mais seguro e conforme</li>
      </ul>
    </Slide>
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div style={{ maxWidth: '768px', margin: '0 auto', paddingTop: '3rem' }}>
      {slides[currentSlide]}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
        <Button onClick={prevSlide}>← Anterior</Button>
        <span style={{ fontSize: '18px' }}>{currentSlide + 1} / {slides.length}</span>
        <Button onClick={nextSlide}>Próximo →</Button>
      </div>
    </div>
  );
}

const Slide = ({ children, bg = "#ffffff" }) => (
  <div style={{
    width: '100%',
    height: '400px',
    backgroundColor: bg,
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }}>
    {children}
  </div>
);

const Button = ({ onClick, children }) => (
  <button
    onClick={onClick}
    style={{
      backgroundColor: '#3b82f6',
      color: 'white',
      fontWeight: 'bold',
      padding: '8px 16px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer'
    }}
  >
    {children}
  </button>
);

export default App;
