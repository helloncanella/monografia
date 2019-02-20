import React from "react"

export default function Slide(props) {
  const wrapClass = `wrap ${props.wrapClass || ""}`
  const slideClass = props.slideClass || ""

  return (
    <section className={slideClass}>
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
      <div className={wrapClass}>{props.children || null}</div>
    </section>
  )
}
