import React from 'react'
import ICard from './ICard'
import mypic from '../assets/images/myphoto.jpg'

function ICardGallery() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '20px'
      }}
    >

      <ICard
        pic={mypic}
        roll='123'
        name='Ram'
        branch='AIML'
      />

      <ICard
        pic={mypic}
        roll='124'
        name='Rahul'
        branch='IT'
      />

      <ICard
        pic={mypic}
        roll='125'
        name='Jai'
        branch='CSE'
      />

    </div>
  )
}

export default ICardGallery