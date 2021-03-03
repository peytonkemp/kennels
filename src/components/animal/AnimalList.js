import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom" // import from libraries before your local modules
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
  // The useHistory hook let's us tell React which route we want to visit. We will use it to tell React to render the animal form component.
  const history = useHistory()
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("Fetching animals data from API")
    getLocations()
      .then(getCustomers)
      .then(getAnimals)

  }, [])


  return (
    <div className="animals">
      <h2>Animals</h2>
		      <button onClick={() => {history.push("/animals/create")}}>
            Add Animal
          </button>
          {
            animals.map(animalObject => {
            const owner = customers.find(c => c.id === animalObject.customerId)
            const location = locations.find(l => l.id === animalObject.locationId)
            return <AnimalCard key={animalObject.id} animal={animalObject} owner={owner} location={location} />
            })
          }
        </div>

  )
}