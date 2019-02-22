import React from "react"
import Slide from "./Slide"

export default function Motivation(props) {
  return (
    <Slide>
      {/* <div class="card-50 bg-white" style={{height: 200}}> */}
      <div class="card-50 bg-white">
        <figure>
          <img src={props.img} />
        </figure>
        <div class="flex-content">
          <h3>{props.title}</h3>
          {props.children}
        </div>
      </div>
    </Slide>
  )
}
