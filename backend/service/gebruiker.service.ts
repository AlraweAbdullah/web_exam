
import gerbruikerDb from "../domain/data-access/gerbruiker.db"
import gerbuikerDB from "../domain/data-access/gerbruiker.db"





const getAllGebruikers = async () => await gerbuikerDB.getAllGebruikers()

const getGebruikerById =async ({id}:{id:number}) => await gerbuikerDB.getGerbruikerById(id)

const countAllGebruikers =async () => await gerbuikerDB.countAllGebruikers()

const getGerbruikersByAge =async ({age}:{age:number}) => await gerbruikerDb.getGerbruikersByAge(age)





export default {
    getAllGebruikers,
    getGebruikerById,
    countAllGebruikers,
    getGerbruikersByAge
}