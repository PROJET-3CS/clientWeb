import React, { FC, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import AntecedModal from './AntecedModal'

const Antecedent: FC = () => {
 //  ==============================================================================
 //  State
 //  ==============================================================================
 const [open, setOpen] = useState(false)

 // ===========================================================================
 // Handlers
 // ===========================================================================

 const toggle = () => {
  setOpen(!open)
 }

 return (
  <div className="folder__item">
   <h3 className="folder__item-title">Les Antécedents:</h3>

   <div className="folder__item-anteced--container">
    <button type="button" className="folder__item-anteced" onClick={toggle} >
     <div className="folder__item-anteced--icon">
      <FontAwesomeIcon icon={faFileAlt} />
     </div>
     <div className="folder__item-anteced--content">
      <span className="folder__item-anteced--title">Affections Congénitaire</span>
      <span className="folder__item-anteced--date">12th February 2020</span>
     </div>
    </button>

    <button type="button" className="folder__item-anteced" onClick={toggle} >
     <div className="folder__item-anteced--icon">
      <FontAwesomeIcon icon={faFileAlt} />
     </div>
     <div className="folder__item-anteced--content">
      <span className="folder__item-anteced--title">Maladies Générales</span>
      <span className="folder__item-anteced--date">12th February 2020</span>
     </div>
    </button>

    <button type="button"className="folder__item-anteced" onClick={toggle} >
     <div className="folder__item-anteced--icon">
      <FontAwesomeIcon icon={faFileAlt} />
     </div>
     <div className="folder__item-anteced--content">
      <span className="folder__item-anteced--title">Allergies aux médciament</span>
      <span className="folder__item-anteced--date">12th February 2020</span>
     </div>
    </button>

    <button type="button" className="folder__item-anteced" onClick={toggle} >
     <div className="folder__item-anteced--icon">
      <FontAwesomeIcon icon={faFileAlt} />
     </div>
     <div className="folder__item-anteced--content">
      <span className="folder__item-anteced--title">Interventions chirurgicales</span>
      <span className="folder__item-anteced--date">12th February 2020</span>
     </div>
    </button>
   </div>

   <AntecedModal modal={open} toggle={toggle} />
  </div>
 )
}

export default Antecedent
