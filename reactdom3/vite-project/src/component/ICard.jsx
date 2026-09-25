import React from 'react'

function ICard(props) {
  return (
    <div
      style={{
        border: '10px solid red',
        height: '300px',
        width: '200px',
        backgroundColor: 'white'
      }}
    >
      <h2 style={{ color: 'red' }}>
        <u>ABES Engineering College</u>
      </h2>

      <img src={props.pic} height={100} width={200}></img>

      <h3>Roll: {props.roll}</h3>
      <h3>Name: {props.name}</h3>
      <h3>Branch: {props.branch}</h3>
    </div>
  )
}

export default ICard
