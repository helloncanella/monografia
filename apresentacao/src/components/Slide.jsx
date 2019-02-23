import React from "react"

export default function Slide(props) {
  const wrapClass = `wrap ${props.wrapClass || ""}`

  const slideClass = `${props.slideClass || ""} ${
    props.fullscreen ? "fullscreen" : ""
  }`

  const content = props.children || null

  return (
    <section className={slideClass} style={props.style || {}}>
      {props.background && (
        <span
          className={`background ${props.background.class || "dark"}`}
          style={
            props.background.img
              ? {
                  backgroundImage: `url('${props.background.img}')`
                }
              : {}
          }
        />
      )}
      {props.fullscreen ? content : <div className={wrapClass}>{content}</div>}
    </section>
  )
}
