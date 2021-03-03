import React, { useContext, useState } from "react"
import { useHistory } from 'react-router-dom';
import "./Location.css"
import { LocationContext } from "./LocationProvider";

export const LocationForm = () => {
    const { addLocation } = useContext(LocationContext)
   

    //Define the intial state of the form inputs with useState()
    const [location, setLocation] = useState({
      name: "",
      
    });

    const history = useHistory();

    //when some changes, save it
    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newLocation = { ...location }
        let selectedVal = event.target.value




        /* Location is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newLocation[event.target.id] = selectedVal
        // update state
        setLocation(newLocation)   
    }


    const handleClickSaveLocation = (event) => {
       event.preventDefault() //Prevents the browser from submitting the form
       
       const locationName = "Death Row"
       
       
        //invoke addLocation passing location as an argument.
        //once complete, change the url and display the location list
        addLocation(location)
        .then(() => history.push("/locations"))
      
    }

    return (
      <form className="locationForm">
          <h2 className="locationForm__title">New Location</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Location name:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.name}/>
              </div>
          </fieldset>
          
          
          
          <button className="btn btn-primary"
            onClick={handleClickSaveLocation}>
            Save Location
          </button>
      </form>
    )
    }