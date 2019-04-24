import React from "react"
import Slide from "./Slide"
import Fonte from "./Fonte"
export default function ActivityExample(props) {
  const texts = [
    {
      img: "images/guts-1.png",
      paragraphs: [
        "Elaboração de um modelo epidemiológico utilizando fatores próprios da escola para avaliar as possibilidades de espalhamento de um vírus",
        "Para esta atividade, utilizou-se o número de estudantes faltosos durante um surto de gripe suína."
      ]
    },
    {
      img: "images/guts-1.png",
      paragraphs: [
        "Dentre os fatores analisados pelos estudantes, foram analisados o layout da construção da escola, o grau de virulência da doença e o número de pessoas inicialmente infectados."
      ]
    },
    {
      img: "images/guts-2.png",
      paragraphs: [
        "Nesta atividade foi utilizada um software de modelagem Star Logo, desenvolvido pelo MIT labs.",
        "O Star Logo é o que a literatura chama de software baseado em agentes - entidades ou atores com liberdade de movimento bidimensional"
      ]
    },
    {
      img: "images/guts-1.png",
      paragraphs: [
        "Durante a atividade, esses agentes foram tomados como uma abstração dos estudantes.",
        "O número total de agentes inseridos foi o igual de matriculados."
      ]
    },
    {
      img: "images/guts-1.png",
      paragraphs: [
        "Durante a atividade, esses agentes foram tomados como uma abstração dos estudantes. O número total de agentes inseridos foi o igual de matriculados.",

        "Pontos em vermelho foram tomados indivíduos infectados, e em verde saudáveis."
      ]
    },
    {
      img: "images/guts-1.png",
      paragraphs: [
        "Ao permitir a automação do modelo, a simulação permitiu a execução de um conjunto de experimentos com as mesmas condições iniciais.",
        "Isso permitiu o acúmulo de amostras, e a obtenção de probabilidades para certos resultados."
      ]
    },
    {
      img: "images/guts-3.png",
      paragraphs: [
        "A comparação dos resultados da simulação com os registrados pela escola, permitiram aos alunos reavaliar a relevância de cada fator analisados, bem como as suposições embutidas no modelo."
      ]
    }
  ]

  const isLast = i => i === texts.length - 1

  return texts.map((a, i) => {
    const { img, paragraphs = [] } = a
    return (
      <Slide wrapClass="aligncenter vertical-align">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="content-left">
            {i === 0 && (
              <h3>
                <strong>Gripe suína na escola</strong>
              </h3>
            )}

            {paragraphs.map(p => {
              return <p dangerouslySetInnerHTML={{ __html: p }} />
            })}
            {isLast(i) && (
              <Fonte
                info={`LEE, I. et al. <i>Computational thinking for youth in practice.</i> ACM Inroads, v. 2, n. 1, p. 32, 2011.`}
              />
            )}
          </div>
          <div className="content-right">
            <ul className="flexblock gallery">
              <li key={`i-${i}`}>
                <figure>
                  <img src={img} alt="" style={{ width: "100%", margin: 0 }} />
                </figure>
              </li>
            </ul>
          </div>
        </div>
      </Slide>
    )
  })
}
