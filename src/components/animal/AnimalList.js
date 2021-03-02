import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { CustomerContext } from "../customers/CustomerProvider"
import { LocationContext } from "../locations/LocationProvider"


export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)
  const { customers, getCustomers } = useContext(CustomerContext)
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("Fetching animals data from API")
    getLocations()
      .then(getCustomers)
      .then(getAnimals)

  }, [])


  return (
    <div className="animals">
      {console.log("AnimalList: Render", animals)}
      {
        animals.map(animalObject => {
          const owner = customers.find(c => c.id === animalObject.customerId)
          const location = locations.find(l => l.id === animalObject.locationId)
          return <AnimalCard key={animalObject.id} animalProps={animalObject} owner={owner} location={location} />
        })
      }
    </div>
  )
}