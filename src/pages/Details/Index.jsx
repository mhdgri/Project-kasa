import React from 'react';
import { useParams } from 'react-router-dom'
import Logements from '../../logements.json'
import Toggle from '../../components/Toggle/Index'
import Tags from '../../components/Tags/Index'
import TagsContainer from '../../components/TagsContainer/Index'
import Slider from '../../components/Slider/Index'

function Details() {
  const { id } = useParams()
  const currentApt = Logements[id] ?? null

  if (!currentApt) {
    window.location.href = '/404'
  }

  const equipements = currentApt?.equipments ?? null
  const tags = currentApt?.tags ?? null
  const images = currentApt?.pictures ?? null

  return (
    <div className="details-container">
      <Slider images={images} />
      <h1 className="details-title">{currentApt.title}</h1>
      <h2 className="details-title">{currentApt.location}</h2>
      <TagsContainer>
        {tags.map((tag, index) => {
          return <Tags text={tag} key={index} />
        })}
      </TagsContainer>
      <div className="toggles_container no_bg">
        <Toggle title="Description">{currentApt.description}</Toggle>
        <Toggle title="Equipements">
          <ul>
            {equipements.map((equipement, index) => {
              return <li key={index}>{equipement}</li>
            })}
          </ul>
        </Toggle>
      </div>
    </div>
  )
}

export default Details
