
const getAllGerbuikers = async () => {
    return await fetch(process.env.NEXT_PUBLIC_API_URL+ "/gebruikers",{
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Authorization:  `Bearer ${sessionStorage.getItem("token")}`
        }

    })
}

const getGebruikerById = async ({id}:{id:number}) => {
    return await fetch(process.env.NEXT_PUBLIC_API_URL+ "/gebruikers/" + id,{
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Authorization:  `Bearer ${sessionStorage.getItem("token")}`
        }
    })
}


const getgerbuikersByAge = async ({age}: {age:number}) => {
    return fetch(process.env.NEXT_PUBLIC_API_URL+ `/gebruikers/age/${age}`, {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            Authorization:  `Bearer ${sessionStorage.getItem("token")}`
        }
    })

}





const GerbuikerService = {
    getAllGerbuikers,
    getGebruikerById,
    getgerbuikersByAge,

}

export default GerbuikerService