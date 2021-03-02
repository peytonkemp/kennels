import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { AnimalForm } from "./animal/AnimalForm";

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <CustomerProvider>
                <LocationProvider>
                    <AnimalProvider>
                        <Route path="/animals">
                            <AnimalList />
                        </Route>
                        <Route path="/animals/create">
                            <AnimalForm />
                        </Route>
                    </AnimalProvider>
                </LocationProvider>
            </CustomerProvider>

            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <Route path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>

            <LocationProvider>
                <Route path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>
        </>
    )
} 