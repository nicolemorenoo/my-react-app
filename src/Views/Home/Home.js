import React from "react";
import './Home.css'

export default function Home() {

  return(
    <div
      className="container-home"
    >

      <a href="/flex"> Go to Flex </a>
      <a href="/styled"> Go to Styled </a>

      <p>Home</p>
      
      <div className="Home" > Box </div>

      <img
        src={'https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/en-exclusiva/embargos/la-ciencia-ciudadana-revela-como-evolucionaron-los-picos-de-las-aves/5919115-11-esl-MX/La-ciencia-ciudadana-revela-como-evolucionaron-los-picos-de-las-aves.jpg'}
        className="imageclass"
      /> 

    </div>
  )
}