import { useEffect, useState } from "react";

const painPoints = [
  {
    title: "Sobrecarga cognitiva",
    text: "Decifrar blocos densos antes de compreender o conteúdo consome energia mental rapidamente.",
  },
  {
    title: "Perda do essencial",
    text: "Sem hierarquia clara, conceitos centrais, exemplos e detalhes competem pela mesma atenção.",
  },
  {
    title: "Menos autonomia",
    text: "Quando as conexões não aparecem, a pessoa pode depender mais de ajuda externa para avançar.",
  },
];

const heroSummary = [
  ["Problema", "textos densos e pouca orientação visual"],
  ["Solução", "mapas, cartões, camadas e trilhas"],
  ["Impacto", "mais autonomia e menos sobrecarga"],
];

const academicPoints = [
  {
    title: "Problema social",
    text: "Materiais educacionais densos podem criar barreiras de acesso para estudantes com diferentes modos de leitura.",
  },
  {
    title: "Mediação tecnológica",
    text: "A proposta usa tecnologia para reorganizar informação, sem substituir o papel pedagógico do professor ou do estudante.",
  },
  {
    title: "Inclusão educacional",
    text: "O foco é ampliar condições de participação, revisão e permanência nos estudos.",
  },
];

const solutionItems = [
  "Mapas mentais",
  "Cartões de conceitos",
  "Resumos em camadas",
  "Trilhas de estudo",
  "Relações entre tópicos",
];

const steps = [
  {
    number: "1",
    title: "Entrada do material",
    text: "O estudante envia um PDF ou cola um texto para iniciar a reorganização do conteúdo.",
  },
  {
    number: "2",
    title: "Leitura estrutural",
    text: "O sistema identifica tópicos, conceitos, exemplos, definições e relações relevantes.",
  },
  {
    number: "3",
    title: "Reorganização visual",
    text: "O conteúdo é transformado em mapas, cartões, camadas de resumo e sequências de estudo.",
  },
  {
    number: "4",
    title: "Estudo no próprio ritmo",
    text: "A pessoa navega por partes menores, alternando visão geral e detalhes conforme sua necessidade.",
  },
];

const features = [
  {
    title: "Mapa mental automático",
    text: "Organiza temas, subtópicos e conexões em uma visualização clara.",
  },
  {
    title: "Resumo em camadas",
    text: "Permite começar pela ideia principal e avançar para detalhes quando fizer sentido.",
  },
  {
    title: "Cartões de conceitos",
    text: "Transforma definições, exemplos e termos-chave em unidades menores de revisão.",
  },
  {
    title: "Modo foco",
    text: "Reduz elementos concorrentes para apoiar leitura, revisão e concentração.",
  },
  {
    title: "Definições e exemplos",
    text: "Destaca explicações essenciais e exemplos práticos ao longo do material.",
  },
  {
    title: "Trilha sugerida",
    text: "Propõe uma sequência de estudo baseada na hierarquia dos assuntos.",
  },
  {
    title: "Personalização visual",
    text: "Prevê ajustes de contraste, densidade, tamanho do texto e quantidade de informação.",
  },
  {
    title: "Exportação para revisão",
    text: "Pode gerar materiais de apoio para estudo posterior, apresentação ou consulta.",
  },
];

const accessibilityItems = [
  "Interface com menos sobrecarga visual",
  "Navegação previsível e consistente",
  "Controle da quantidade de informação exibida",
  "Possibilidade de reduzir estímulos visuais",
  "Leitura por blocos menores",
  "Hierarquia clara entre tópicos",
];

const audiences = [
  "Estudantes autistas",
  "Estudantes com TDAH",
  "Pessoas com dislexia",
  "Estudantes com dificuldade de leitura e interpretação",
  "Pessoas que aprendem melhor com recursos visuais",
];

const impacts = [
  "Reduzir cansaço cognitivo durante o estudo",
  "Facilitar a compreensão de textos longos",
  "Melhorar a revisão de conceitos importantes",
  "Tornar o estudo mais inclusivo",
  "Ajudar o estudante a visualizar conexões entre ideias",
];

const stackItems = [
  ["Frontend", "React para interface responsiva e componentes reutilizáveis."],
  ["Backend futuro", "Python com FastAPI para receber documentos e coordenar o processamento."],
  ["Processamento de PDF", "PyMuPDF ou pdfplumber para extrair texto, páginas e estrutura básica."],
  ["Visualização", "React Flow, Mermaid.js ou D3.js para mapas, fluxos e relações."],
  ["IA", "Modelos de linguagem para extração de tópicos, síntese e identificação de relações."],
];

const ifamLogoUrl = `${import.meta.env.BASE_URL}ifam-cmc-logo.png`;

function Header({ theme, onToggleTheme }) {
  const isDark = theme === "dark";

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Página inicial do Clarear">
        <span className="brand-mark" aria-hidden="true">
          C
        </span>
        <span>
          Clarear
          <small>CTS</small>
        </span>
      </a>
      <div className="header-actions">
        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#academico">Contexto</a>
          <a href="#problema">Problema</a>
          <a href="#solucao">Solução</a>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#impacto">Impacto</a>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          aria-label={isDark ? "Ativar modo claro" : "Ativar modo noturno"}
          aria-pressed={isDark}
          onClick={onToggleTheme}
        >
          <span aria-hidden="true" className="theme-toggle-track">
            <span className="theme-toggle-thumb"></span>
          </span>
          <span>{isDark ? "Modo claro" : "Modo noturno"}</span>
        </button>
      </div>
    </header>
  );
}

function SectionIntro({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={`section-intro section-intro--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function ProductMockup({ compact = false }) {
  return (
    <div
      className={`product-mockup ${compact ? "product-mockup--compact" : ""}`}
      aria-hidden="true"
    >
      <div className="mockup-toolbar">
        <span></span>
        <span></span>
        <span></span>
        <strong>Documento transformado</strong>
      </div>
      <div className="mockup-content">
        <div className="document-panel">
          <p className="doc-label">Texto original</p>
          <div className="doc-line doc-line--wide"></div>
          <div className="doc-line"></div>
          <div className="doc-line doc-line--short"></div>
          <div className="doc-block">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="map-panel">
          <div className="map-node map-node--main">Ideia central</div>
          <div className="map-branch map-branch--one"></div>
          <div className="map-branch map-branch--two"></div>
          <div className="map-node map-node--top">Conceito</div>
          <div className="map-node map-node--mid">Exemplo</div>
          <div className="map-node map-node--bottom">Revisão</div>
          <div className="study-card study-card--one">
            <span>Definição</span>
            <strong>em bloco curto</strong>
          </div>
          <div className="study-card study-card--two">
            <span>Trilha</span>
            <strong>passo a passo</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <aside className="institution-card" aria-label="Instituição">
        <span>Instituição de ensino</span>
        <img
          src={ifamLogoUrl}
          alt="Instituto Federal do Amazonas, Campus Manaus Centro"
        />
      </aside>
      <div className="hero-visual">
        <ProductMockup />
      </div>
      <div className="hero-content">
        <p className="hero-context">Ciência, Tecnologia e Sociedade</p>
        <h1>Clarear</h1>
        <p className="hero-lead">
          Do documento denso ao estudo visual, claro e navegável.
        </p>
        <p className="hero-copy">
          Uma proposta acadêmica de acessibilidade educacional para transformar
          PDFs, apostilas e textos longos em mapas mentais, cartões de conceitos,
          resumos em camadas e trilhas de aprendizagem.
        </p>
        <div className="hero-summary" aria-label="Resumo da proposta">
          {heroSummary.map(([label, text]) => (
            <div className="hero-summary-item" key={label}>
              <strong>{label}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
        <p className="hero-authors">
          Trabalho desenvolvido por <strong>Chrysthyan, Amarildo e Breno</strong>.
        </p>
        <div className="hero-actions" aria-label="Ações principais">
          <a className="button button--primary" href="#solucao">
            Conhecer proposta
          </a>
          <a className="button button--secondary" href="#funcionalidades">
            Ver funcionalidades
          </a>
        </div>
      </div>
    </section>
  );
}

function PainCard({ title, text }) {
  return (
    <article className="card pain-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function FeatureCard({ title, text }) {
  return (
    <article className="card feature-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function AcademicCard({ title, text }) {
  return (
    <article className="academic-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("clarear-theme");

    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("clarear-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="conteudo">
        <Hero />

        <section className="section section--academic" id="academico">
          <div className="container academic-layout">
            <div>
              <SectionIntro
                eyebrow="Recorte acadêmico"
                title="Tecnologia como apoio à inclusão, não como atalho"
                text="Na disciplina de Ciência, Tecnologia e Sociedade, o Clarear discute como ferramentas digitais podem reduzir barreiras de acesso ao conhecimento quando são pensadas a partir das necessidades reais dos estudantes."
              />
              <p className="authors-line">
                Autoria: <strong>Chrysthyan, Amarildo e Breno</strong>.
              </p>
            </div>
            <div className="academic-card-grid">
              {academicPoints.map((item) => (
                <AcademicCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--light" id="problema">
          <div className="container">
            <SectionIntro
              eyebrow="Problema"
              title="Texto denso pode se tornar barreira de acesso"
              text="Para estudantes neurodivergentes, materiais longos e pouco visuais não são apenas inconvenientes: podem gerar sobrecarga, perda de orientação e afastamento do estudo."
            />
            <div className="card-grid card-grid--three">
              {painPoints.map((item) => (
                <PainCard key={item.title} {...item} />
              ))}
            </div>
            <p className="support-text problem-note">
              O problema não está na capacidade do estudante, mas no modo como o
              conhecimento é apresentado.
            </p>
          </div>
        </section>

        <section className="section" id="solucao">
          <div className="container solution-layout">
            <div>
              <SectionIntro
                eyebrow="Solução"
                title="Uma plataforma para reorganizar conhecimento"
                text="O Clarear transforma documentos textuais em uma experiência de estudo visual. O foco não é apenas resumir: é revelar estrutura, relações e caminhos de aprendizagem."
              />
              <ul className="check-list">
                {solutionItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <ProductMockup compact />
          </div>
        </section>

        <section className="section section--blue" id="como-funciona">
          <div className="container">
            <SectionIntro
              eyebrow="Como funciona"
              title="Do texto ao percurso de estudo"
              text="O fluxo foi pensado para ser previsível, com etapas claras e sem prometer funcionalidades além do protótipo visual."
              align="center"
            />
            <div className="steps">
              {steps.map((step) => (
                <article className="step" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="funcionalidades">
          <div className="container">
            <SectionIntro
              eyebrow="Funcionalidades"
              title="Recursos pensados para estudar com mais clareza"
              text="Visualização, síntese e controle de informação trabalham juntos para apoiar diferentes ritmos de aprendizagem."
            />
            <div className="card-grid card-grid--four">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--green" id="acessibilidade">
          <div className="container accessibility-layout">
            <SectionIntro
              eyebrow="Acessibilidade"
              title="Respeitar diferentes formas de aprender"
              text="Clareza, previsibilidade e controle visual também são recursos de acessibilidade."
            />
            <ul className="accessibility-list">
              {accessibilityItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="publico">
          <div className="container audience-layout">
            <SectionIntro
              eyebrow="Público-alvo"
              title="Para estudantes que precisam de outros modos de acesso ao texto"
              text="O foco inicial está em pessoas que enfrentam barreiras com materiais densos e se beneficiam de organização visual."
            />
            <div className="audience-tags" aria-label="Grupos contemplados pela proposta">
              {audiences.map((audience) => (
                <span key={audience}>{audience}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--light" id="impacto">
          <div className="container impact-layout">
            <div>
              <SectionIntro
                eyebrow="Impacto esperado"
                title="Menos esforço para decifrar a forma, mais energia para compreender o conteúdo"
                text="O Clarear busca apoiar autonomia, revisão e permanência nos estudos."
              />
              <ul className="impact-list">
                {impacts.map((impact) => (
                  <li key={impact}>{impact}</li>
                ))}
              </ul>
            </div>
            <aside className="impact-panel" aria-label="Síntese do impacto esperado">
              <strong>Objetivo central</strong>
              <p>
                Apresentar a estrutura do conhecimento para que o estudante possa
                localizar temas, relações e prioridades com mais confiança.
              </p>
            </aside>
          </div>
        </section>

        <section className="section" id="tecnica">
          <div className="container">
            <SectionIntro
              eyebrow="Proposta técnica"
              title="Uma arquitetura possível para evoluir o protótipo"
              text="A evolução futura pode combinar extração de documentos, modelos de linguagem e bibliotecas de visualização, mantendo a interface simples para o estudante."
              align="center"
            />
            <div className="stack-list">
              {stackItems.map(([label, description]) => (
                <article className="stack-item" key={label}>
                  <h3>{label}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta" id="conceito">
          <div className="container final-cta-content">
            <div>
              <p>Estudar não deveria depender da capacidade de atravessar paredes de texto.</p>
              <span>Ciência, Tecnologia e Sociedade | Chrysthyan, Amarildo e Breno</span>
            </div>
            <a className="button button--primary" href="#solucao">
              Explorar conceito
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
