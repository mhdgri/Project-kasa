import React from 'react';
import { useParams } from 'react-router-dom'
import Logements from '../../logements.json'
import Toggle from '../../components/Toggle/Index'
import Tags from '../../components/Tags/Index'
import TagsContainer from '../../components/TagsContainer/Index'
import Slider from '../../components/Slider/Index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons"
import { faStar as outlineStar } from "@fortawesome/free-solid-svg-icons"

function Details() {
  const { id } = useParams()
  const currentApt = Logements[id] ?? null

  if (!currentApt) {
    window.location.href = '/404'
  }

  const equipements = currentApt?.equipments ?? null
  const tags = currentApt?.tags ?? null
  const images = currentApt?.pictures ?? null

  const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < currentApt.rating) {
      stars.push(<FontAwesomeIcon key={i} className='container-tags-stars__icon--colorred' icon={solidStar} />)
    } else {
      stars.push(<FontAwesomeIcon key={i} className='container-tags-stars__icon--color-grey' icon={outlineStar} />)

    }
  }

  return (
    <div className="appartment">
      <Slider images={images} />
      <div className='appartment__content'>
        <div className="details">
          <div>
            <h1 className="details__titleh1">{currentApt.title}</h1>
            <h2 className="details__titleh2">{currentApt.location}</h2>
          </div>
          <TagsContainer>
            {tags.map((tag, index) => {
              return <Tags text={tag} key={index} />
            })}
          </TagsContainer>
        </div>
        <div className='owner'>
          <div className='owner__content'>
            <div className='owner__content__name'> {currentApt.host.name}</div>
            <img className='owner__content__picture' src={currentApt.host.picture} alt={`${currentApt.host.name}`} />
          </div>
          <p className="owner__stars">
            {stars}
          </p>
        </div>
      </div>
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
