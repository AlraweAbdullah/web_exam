import { mapToGebruiker, mapToGebruikers } from "../../mapper/gerbruiker.mapper"
import { database } from "../../util/db.server"
import { Gebruiker } from "../model/gebruiker"




const getGerbruikerById = async (id:number) : Promise<Gebruiker>=> {
        const gebruikerPrisma= await database.gebruiker.findUnique({
            where:{
                id:id
            }
        })

        if(gebruikerPrisma){
            return mapToGebruiker(gebruikerPrisma)
        }
}

const getGerbruikersByAge = async (age:number) : Promise<Gebruiker[]>=> {
    const gebruikersPrisma= await database.gebruiker.findMany({
        where:{
            age:age
        }
    })

    if(gebruikersPrisma){
        return mapToGebruikers(gebruikersPrisma)
    }
   
}

const getAllGebruikers = async () : Promise<Gebruiker[]> =>{
    const gebruikers = await database.gebruiker.findMany({
    })
    return mapToGebruikers(gebruikers)
}

const countAllGebruikers = async () : Promise<number> => (await getAllGebruikers()).length

export default{
    getGerbruikerById,
    getAllGebruikers,
    countAllGebruikers,
    getGerbruikersByAge
}