import React from "react"
import { Link } from "react-router-dom"
import "./Animal.css"


export const AnimalCard = ({ animal }) => {
  return (
    <section className="animal">
      <h3 className="animal__name">
        <Link to={`/animals/detail/${animal.id}`}>
          { animal.name }
        </Link>
      </h3>
      <div className="animal__breed">{ animal.breed }</div>
  </section>
)}