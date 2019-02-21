import Slide from "./Slide"
import React from "react"

const excerpts = [
  `Coloque os números de modo que cada algarismo possa ficar
            diretamente abaixo (ou na mesma linha perpendicular) dos algorismos
            de mesmo valor, ou seja: unidades em unidades, dezenas em dezenas,
            centenas em centenas`,
  `[...] Em seguida, desenhando uma linha abaixo
            deles; comece a adição no primeiro lugar (ou unidades) e some todas
            os algorismos naquele lugar, e se a soma delas for menor que dez,
            coloque-a abaixo da linha abaixo de seu próprio lugar;`,
  `[...] mas se a soma for superior a dez, estabeleça apenas o excedente acima das dez (ou dezenas) e algumas dezenas, à medida que a soma dessas unidades se eleva, carregue para o local das dezenas, adicionando-as e os algorismos que estão no lugar de dezenas juntos; em seguida, proceda da mesma maneira até o terceiro lugar, ou centenas, e de um lugar para outro até o último, e estabeleça a soma total do último lugar.`
]

const last = i => excerpts.length - 1 === i
const first = i => i === 0

export default function AlgorithmExample() {
  return excerpts.map((excerpt, i) => {
    return (
      <Slide slideClass="bg-white" fullscreen key={`excerpt-${i}`}>
        <div className="card-50">
          <div className="flex-content">
            {first(i) && (
              <h4>
                <strong>Exemplo do sec. XVIII</strong>
              </h4>
            )}
            <blockquote style={{ width: "100%" }}>
              <p className="text-serif" style={{ textAlign: "left" }}>
                "{excerpt}"
              </p>
              {last(i) && (
                <p>
                  {" "}
                  <cite style={{ textAlign: "left" }}>
                    John Gough -{" "}
                    <strong>Practical Arithmetic in Four Books, 1767 </strong>
                    {/* <br /> */}
                  </cite>
                </p>
              )}
            </blockquote>
          </div>

          <figure>
            <img src="images/algorithm.1.png" alt="" />
          </figure>
        </div>
      </Slide>
    )
  })
}
