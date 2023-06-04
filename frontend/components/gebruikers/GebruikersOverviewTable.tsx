import React from "react"
import { Gebruiker } from "../../types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfo} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import GerbuikerService from "../../services/GebruikerService"
import GebruikerOverview from "./GebruikerOverview"
import { Button } from "react-bootstrap"


type Props = {
    gebruikers : Array<Gebruiker>
}


    

const GerbuikersOverviewTable: React.FC<Props> = ({ gebruikers }: Props) => {
    const [gebruiker, setGerbuiker] = useState <Gebruiker>(null)
    
    const handleGebruiker = async (id: number) => {
        GerbuikerService.getGebruikerById({id:id})
        .then((res) => res.json())
        .then ((gebruiker) => setGerbuiker(gebruiker))
    }

    return (
        <>
                {gebruikers && (
                <>
                    <table className={`table table-hover`}>
                        <thead className="table table-dark thead">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">City</th>
                                <th scope="col">Age</th>
                                <th scope="col">Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gebruikers && gebruikers.map((gebruiker, index) => (
                                <tr key={index}>
                                    <td>{gebruiker.name}</td>
                                    <td>{gebruiker.email}</td>
                                    <td>{gebruiker.city}</td>
                                    <td>{gebruiker.age}</td>
                                    <td >
                                        <button className="btn btn-outline-primary" onClick={() =>{handleGebruiker(gebruiker.id)}}>info</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                     <GebruikerOverview gebruiker={gebruiker}/>
                    </>
                )}
        </>
    )
}

export default GerbuikersOverviewTable