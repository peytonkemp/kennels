import React from "react"
import { AnimalCard } from "./animal/AnimalCard"
import "./Kennel.css"

export const Kennel = () => {
    return (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>
    </>
)
}