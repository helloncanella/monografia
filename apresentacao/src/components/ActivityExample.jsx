import React from "react"
import Slide from "./Slide"
import Fonte from "./Fonte"
export default function ActivityExample(props) {
  const texts = [
    { img: "images/guts-1.png", paragraphs: [""] },
    { img: "images/guts-2.png", paragraphs: [""] },
    { img: "images/guts-3.png", paragraphs: [""] }
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
