import React from 'react'
import Banner from '../../components/Banner/Index'
import Toggle from '../../components/Toggle/Index'
import aboutBanner from "../../Assets/banner-about.png"

function About() {
  return (
    <div>
      <Banner urlImage={aboutBanner} />
      <Toggle title="Fiabilité">
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
      </Toggle>
      <Toggle title="Respect">
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </Toggle>
      <Toggle title="Service">
        Nos équipes se tiennent à votre disposition pour vous fournir une
        expérience parfaite. N&apos;hésitez pas à nous contacter si vous avez la
        moindre question.
      </Toggle>
      <Toggle title="Sécurité">
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond aux critères de sécurité
        établis par nos services. En laissant une note aussi bien à l&apos;hôte
        qu&apos;au locataire, cela permet à nos équipes de vérifier que les
        standards sont bien respectés. Nous organisons également des ateliers
        sur la sécurité domestique pour nos hôtes.
      </Toggle>
    </div>
  )
}

export default About
