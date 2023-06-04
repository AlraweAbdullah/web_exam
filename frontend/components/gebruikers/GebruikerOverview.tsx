import React from "react"
import { Gebruiker } from "../../types"


type Props = {
    gebruiker : Gebruiker
}


const GebruikerOverview : React.FC<Props> = ({ gebruiker }: Props) => {
    return (
        <div className="col-6">
            {gebruiker && (
                <>
                    <p>
                        <b>Name : {gebruiker.name} </b> 
                    </p>
                    <p>
                        <b>Email : {gebruiker.email} </b> 
                    </p>
                    <p>
                        <b>City : {gebruiker.city} </b> 
                    </p>
                    <p>
                        <b>Age : {gebruiker.age} </b> 
                    </p>
                </>
                
            )}
        </div>
    )
}

export default GebruikerOverview