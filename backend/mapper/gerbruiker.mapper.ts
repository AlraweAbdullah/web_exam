import { Gebruiker } from "../domain/model/gebruiker"
import { GebruikerPrisma } from "../util/db.server"

const mapToGebruiker = ({
    id,
    name,
    email,
    city,
    age
}:  GebruikerPrisma): Gebruiker => Gebruiker.create(id, name, email, city, age)

const mapToGebruikers = (gebruikerPrisma: GebruikerPrisma[]): Gebruiker[]  => {
    return gebruikerPrisma.map(mapToGebruiker)
 }

export {
    mapToGebruiker, 
    mapToGebruikers
}