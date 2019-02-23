import React from "react"
import _ from "lodash"

export default function Fonte(props) {
  const info = _.isArray(props.info)
    ? `<ol style="margin-top: 15px">${props.info.map(
        i => `<li style="line-height: 1">${i}</li>`
      )}</ol>`
    : props.info

  const content = `<strong>Fonte:</strong> ${info}`

  return props.small ? (
    <div className="text-serif" dangerouslySetInnerHTML={{ __html: content }} />
  ) : (
    <p className="text-serif" dangerouslySetInnerHTML={{ __html: content }} />
  )
}
