import React, { Component } from "react"
import "./App.css"
import "webslides/static/js/webslides.js"
import "webslides/static/js/svg-icons.js"
import Slide from "./components/Slide"
import AlgorithmExample from "./components/AlgorigthmExample"

/* global WebSlides */
class App extends Component {
  componentDidMount() {
    window.ws = new WebSlides()
  }

  render() {
    return (
      <div className="App">
        <main role="main">
          <article id="webslides">
            {/** Quick Guide
          - Each parent <section> in the <article id="webslides"> element is an individual slide.
          - Vertical sliding = <article id="webslides" className="vertical">
          - <div className="wrap"> = container 90% / <div className="wrap size-50"> = 45%;
        **/}
            <Slide
              slideClass="bg-gradient-v aligncenter "
              background={{ img: "images/skull.jpg" }}
            >
              <div className="content-left">
                <h1>
                  O Pensamento Computacional como Recurso para Aprendizagem
                  Científica
                </h1>
                <br />
                <p className="" style={{ marginBottom: 0 }}>
                  <strong>Autor:</strong> Hellon Canella Machado
                </p>
                <p className="">
                  <strong>Orientador:</strong> Dr. Hélio Salim de Amorim
                </p>
              </div>
            </Slide>
            <section class="slide " style={{ textAlign: "left" }}>
              <div class="wrap size-30">
                <h3>Sumário</h3>
                <hr />
                <div class="toc">
                  <ol>
                    <li>
                      <a href="#" title="Go to Learning to see">
                        <span class="chapter">
                          Aprendizagem Científica: Problemas comuns
                        </span>
                        <span class="toc-page">01</span>
                      </a>
                    </li>
                    <li>
                      <a href="#slide=3" title="Go to What is Design?">
                        <span class="chapter">What is Design?</span>
                        <span class="toc-page">04</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Go to What is Beauty?">
                        <span class="chapter">What is Beauty?</span>
                        <span class="toc-page">08</span>
                      </a>
                      <ol>
                        <li>
                          <a href="#" title="Go to Harmony">
                            <span class="chapter">Harmony</span>
                            <span class="toc-page">12</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="Go to Simplicity vs. Clarity">
                            <span class="chapter">Simplicity vs. Clarity</span>
                            <span class="toc-page">14</span>
                          </a>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <a href="#" title="Go to Building a Culture">
                        <span class="chapter">Building a Culture</span>
                        <span class="toc-page">16</span>
                      </a>
                      <ol>
                        <li>
                          <span class="chapter">Purpose</span>
                          <span class="toc-page">17</span>
                          <ol>
                            <li>
                              <span class="chapter">Valuable</span>
                              <span class="toc-page">18</span>
                              <ol>
                                <li>
                                  <span class="chapter">Easy</span>
                                  <span class="toc-page">20</span>
                                </li>
                                <li>
                                  <span class="chapter">Elegant</span>
                                  <span class="toc-page">21</span>
                                </li>
                              </ol>
                            </li>
                          </ol>
                        </li>
                        <li>
                          <span class="chapter">Principles</span>
                          <span class="toc-page">24</span>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <span class="chapter">Epilogue</span>
                      <span class="toc-page">40</span>
                    </li>
                  </ol>
                </div>
              </div>
            </section>
            <Slide
              wrapClass="aligncenter fadeInUp"
              background={{ img: "images/korean-class.jpg" }}
              slideClass="bg-gradient-v"
            >
              <h3>
                <strong>Aprendizagem científica: Problemas comuns</strong>
              </h3>
            </Slide>
            <Slide wrapClass="aligncenter">
              <p className="text-intro">
                Segundo PISA 2015, apenas 30,6% dos alunos brasileiros
                alcançaram uma patamar de competência básico na área de
                ciências.
              </p>
            </Slide>
            <Slide wrapClass="aligncenter size-60">
              <h2>
                <strong>Problemas recorrentes</strong>
              </h2>
              <p className="text-intro">
                Perceptíveis para professores veteranos
              </p>

              <div className="bg-white shadow">
                <ul className="flexblock reasons">
                  <li>
                    <h2>
                      Dificuldade para transpor a contextos novos conceitos e
                      estratégias de resolução de problemas aprendidos.
                    </h2>
                    <p>
                      Quando o formato do problema muda, os alunos apresentam
                      dificuldades para aplicar à nova situação os conceitos e
                      algoritmos adquiridos.
                    </p>
                  </li>
                  <li>
                    <h2>Escassez de significado dos resultados obtidos.</h2>
                    <p>
                      Aplicação, <strong>de modo acrítico</strong>, dos
                      algoritmos de um modelo de problema, visando quase sempre
                      uma resposta numérica, única e{" "}
                      <strong>
                        {" "}
                        <q>"correta"</q>.
                      </strong>
                    </p>
                  </li>
                  <li>
                    <h2 style={{ margin: 0 }}>
                      Ausência de motivação para aprendizagem de temas
                      científicos.
                    </h2>
                    <p>
                      A percepção de insignificância dos temas tratados em sala
                      de aula leva à desmotivação
                    </p>
                  </li>
                </ul>
              </div>
            </Slide>
            <Slide wrapClass="alignleft">
              <div className="content-left">
                <h3>
                  <strong>Essência dos problemas</strong>
                </h3>
                <p className="text-intro">
                  Apesar de serem multifatoriais, os problemas apresentados se
                  originam na forma como disciplinas científicas são ensinadas,
                  e a aprendizagem delas avaliada.
                </p>
                <p>
                  O modelo avaliativo vigente, por exemplo, desestimula a
                  aprendizagem significativa ao privilegiar a reprodução de
                  "respostas corretas", induzindo o estudante a agir de forma
                  autômata.
                </p>
              </div>
            </Slide>
            <Slide>
              <div className="content-left">
                <h4>
                  <strong>Exemplo: um problema de física</strong>
                </h4>
                <pre style={{ marginTop: 15 }}>
                  Qual é velocidade após 32s de um objeto lançado para alto com
                  uma velocidade de 20m/s?
                </pre>
                <p>
                  A recorrência desse modelo de problema ilustra a preocupação
                  reprodutiva do atual modelo de ensino, que colabora para a
                  transmissão de uma imagem irrealista da atividade científica.
                </p>
              </div>
            </Slide>
            <Slide
              slideClass="bg-gradient-v"
              background={{ img: "images/robot.jpg" }}
              wrapClass="aligncenter fadeInUp"
            >
              <h3>
                <strong>Pensamento Computacional</strong>
              </h3>
            </Slide>
            <Slide fullscreen>
              <div className="card-50">
                <figure>
                  <img src="images/wing-2006.png" alt="" />
                </figure>
                <div className="flex-content">
                  <h2>
                    <strong>Pensamento Computacional</strong>
                  </h2>
                  <p className="text-intro">
                    Expressão presente na literatura desde da década de 80, mas
                    que ganha popularidade com uma{" "}
                    <a href="http://www.cs.cmu.edu/~./15110-s13/Wing06-ct.pdf">
                      publicação
                    </a>
                    , no ano de 2006, pela Professora Jeannette Wing, então
                    professora da Universidade Carnegie Mellon.
                  </p>
                </div>
              </div>
            </Slide>
            <Slide slideClass="bg-white" fullscreen>
              <div className="card-50">
                <div className="flex-content">
                  <blockquote style={{ width: "100%" }}>
                    <p className="text-serif" style={{ textAlign: "center" }}>
                      "O pensamento computacional envolve{" "}
                      <strong>resolver problemas</strong>,
                      <strong> projetar sistemas</strong> e compreender
                      comportamento, baseando-se em{" "}
                      <strong>conceitos fundamentais</strong> à ciência da
                      computação ."
                    </p>
                    <p>
                      <cite style={{ textAlign: "center" }}>
                        Jeannette Wing
                      </cite>
                    </p>
                  </blockquote>
                </div>
                <figure>
                  <img src="images/wing.jpg" alt="" />
                </figure>
              </div>
            </Slide>
            <Slide wrapClass="aligncenter">
              <h2>
                <strong>mas quais conceitos?</strong>
              </h2>
            </Slide>
            <Slide>
              <div className="content-left">
                <h2>
                  <strong>Conceitos fundamentais</strong>
                </h2>
                <p className="text-intro">
                  Dos conceitos fundamentais à ciência da computação, três
                  necessitam ser compreendidos para o entendimento do pensamento
                  computacional.
                  <br />
                </p>
                <p>
                  São eles o <strong>algoritmo</strong>, o{" "}
                  <strong>problema computacional</strong> e a{" "}
                  <strong>abstração</strong>
                </p>
              </div>
            </Slide>
            <Slide wrapClass="aligncenter">
              <h2>
                <strong>algoritmo</strong>
              </h2>
            </Slide>
            <Slide>
              <div className="content-left">
                <h2>
                  <strong>Algoritmo</strong>
                </h2>

                <p className="text-intro">
                  Solução para um problema que satisfaz as seguintes condições:
                </p>

                <ul className="flexblock steps">
                  <li>
                    <h2>01. ser uma sequencia de passos que leve à solução</h2>
                  </li>
                  <li>
                    <div class="process step-2" style={{ top: 24 }} />
                    <h2>02. ser um processo finito</h2>
                  </li>
                  <li>
                    <div class="process step-3" style={{ top: 24 }} />
                    <h2>03. resolver qualquer instância do problema</h2>
                  </li>
                </ul>
              </div>
            </Slide>
            <AlgorithmExample />
            <Slide wrapClass="aligncenter">
              <h2>
                <strong>problema computacional</strong>
              </h2>
            </Slide>
            <Slide>
              <div className="content-left">
                <h2>
                  <strong>Problema Computacional</strong>
                </h2>

                <p className="text-intro">
                  Conjunto de perguntas para qual um computador pode prover
                  respostas.
                </p>

                <p>Exemplo:</p>
                <pre>
                  Encontre a razão entre dois inteiros A e B, onde B é diferente
                  de zero.
                </pre>

                <p>
                  Qualquer par de inteiros, em que B é diferente de 0,
                  representa uma <strong>instância</strong> possível do
                  problema.
                </p>

                <p>
                  Um problema computacional pode ter portanto um conjunto
                  infinito de instâncias.
                </p>
              </div>
            </Slide>
            <Slide>
              <div className="content-left">
                {/* <h2>
                  <strong>Problema Computacional</strong>
                </h2> */}
                <p className="text-intro">
                  A definição do problema computacional, ou seja, de todas as
                  instâncias de um problema é condição essencial para elaboração
                  de um algoritmo.
                </p>
                <p>
                  O algoritmo - o conjunto de instruções a serem executadas pelo
                  computador - é, por sua vez, o que torna possível a{" "}
                  <strong>automação da solução</strong>.
                </p>
              </div>
            </Slide>
            <Slide wrapClass="aligncenter">
              <h2>
                <strong>abstração</strong>
              </h2>
            </Slide>
            <Slide>
              <div className="content-left">
                <h2>
                  <strong>Abstração</strong>
                </h2>
                <p className="">
                  A abstração é, em essência, uma <strong>redução</strong> da
                  realidade. Uma <strong>representação</strong>.
                </p>
                <p>
                  Abstrair, nesse sentido, equivale à incorporar parte da
                  realidade em um <strong>modelo</strong>, em desfavor de
                  detalhes julgados como menos importantes.
                </p>
              </div>
            </Slide>
            <Slide>
              <h2>Um animal. Quatro modelos. </h2>
              <ul className="flexblock gallery">
                {[
                  "images/cow-1.jpg",
                  "images/cow-2.jpg",
                  "images/cow-3.jpg",
                  "images/cow-4.jpg"
                ].map((img, i) => {
                  return (
                    <li key={`cow-${i}`}>
                      <figure style={{ height: 245.9 }}>
                        <img src={img} style={{ height: "100%" }} alt="" />
                      </figure>
                    </li>
                  )
                })}
              </ul>
              >
            </Slide>
            <Slide>
              <div className="content-left">
                <p>
                  O grau de detalhamento de um modelo dependerá sempre das
                  circunstâncias do problema.
                </p>
                <p>
                  Desprezar os efeitos do atrito na trajetória de um foguete é
                  conveniente se estamos ensinando física básica, mas impróprio
                  no contexto de um programa aerospacial.
                </p>
              </div>
            </Slide>
            <Slide wrapClass="aligncenter">
              <h2>
                <strong>abstração como cápsula</strong>
              </h2>
            </Slide>

            <Slide wrapClass="aligncenter">
              <div className="content-left">
                <h2>
                  <strong>Abstração como cápsula</strong>
                </h2>
                <p>
                  Em computação e engenharia, a construção de sistemas depende
                  da criação módulos.
                </p>
                <p>
                  Nestes casos, o processo de abstração se caracteriza pelo{" "}
                  <strong>encapsulamento</strong> de componentes responsáveis
                  pela <strong>implementação</strong> das funcionalidades.
                </p>
                <p>
                  Busca-se deixar visível apenas a <strong>interface</strong>,
                  os componentes que caracterizam o modelo e permitem a sua
                  manipulação externa.
                </p>
              </div>
            </Slide>
            <Slide wrapClass="aligncenter">
              <div className="content-left">
                <h4>
                  <strong>Exemplo: planetário mecânico</strong>
                </h4>
                <p>
                  À esquerda temos sua <strong>interface</strong>, superfície
                  metálica responsável por externalizar os elementos que
                  caracterizam o modelo, e esconder os detalhes da{" "}
                  <strong>implementação</strong> - sistema de rodas dentadas, à
                  direita.
                </p>
              </div>
              <div className="content-right">
                <ul className="flexblock gallery">
                  <li>
                    <figure>
                      <img src="images/orrery.png" alt="" />
                    </figure>
                  </li>
                  <li>
                    <figure>
                      <img src="images/orrery-engine.png" alt="" />
                    </figure>
                  </li>
                </ul>
              </div>
            </Slide>
            <Slide slideClass="aligncenter">
              <h2>
                <strong>pensamento computacional: a formação</strong>
              </h2>
            </Slide>
            <Slide>
              <div className="content-left">
                <h2>TODO: </h2>
                <h3>explicar como se forma</h3>
              </div>
              <div className="content-right">
                <p>Espaço para imagem</p>
              </div>
            </Slide>

            <Slide
              background={{ class: "dark" }}
              slideClass="bg-purple"
              wrapClass="size-60"
            >
              <p class="text-context">
                <strong>OBJETIVO</strong>
              </p>
              <h3>
                Demonstrar como o uso do pensamento computacional em{" "}
                <strong>sala de aula</strong> tem criado um{" "}
                <strong>ambiente favorável</strong> para a aprendizagem
                científica.
              </h3>
            </Slide>
            <Slide
              slideClass="bg-gradient-v"
              background={{ img: "images/girl.jpeg" }}
              wrapClass="aligncenter fadeInUp"
            >
              <h3>
                <strong>Implicações Educacionais</strong>
              </h3>
            </Slide>
            <Slide>
              <h3>Pensamento computacional na sala de aula</h3>
              <ul class="flexblock gallery">
                {[
                  {
                    name: "Ensino de programação",
                    img: "images/programming.jpg"
                  },

                  {
                    name: "Robótica",
                    img: "images/robotica.jpg"
                  },

                  {
                    name: "Modelagem e simulação",
                    img: "images/simulation.png"
                  },

                  {
                    name: "Criação de jogos",
                    img: "images/gaming.jpg"
                  }
                ].map(({ name, img }, i) => (
                  <li key={`a-${i}`}>
                    <figure>
                      <img
                        src={img}
                        alt=""
                        style={{ height: 222.287, margin: 0, width: "100%" }}
                      />
                      <figcaption>
                        <h2>{name}</h2>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </Slide>
            <Slide slideClass="aligncenter">
              <h2>
                <strong>benefícios</strong>
              </h2>
            </Slide>
          </article>
        </main>
      </div>
    )
  }
}

export default App
