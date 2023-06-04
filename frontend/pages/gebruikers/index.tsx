import Head from "next/head"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import GebruikerOverview from "../../components/gebruikers/GebruikersOverviewTable"
import GerbuikerService from "../../services/GebruikerService"
import { useEffect, useState } from "react"
import {Gebruiker } from "../../types"

const Gebruikers: React.FC = () => {
    const [gebruikers, setGerbuikers] = useState(Array<Gebruiker>)
    
    //Git list of all gebruikers
    const getAllGebruikers = async () => {
        GerbuikerService.getAllGerbuikers()
        .then((res) => res.json())
        .then ((gebruikers) => setGerbuikers(gebruikers))
    }
    
    useEffect(() => {
        getAllGebruikers()
    }, [])

    // Handle input when user filter on age
    const handleChange = async (e) => {
        if(e.target.value.trim().length > 0){
                const age:number = Number(e.target.value)
                if(!isNaN(age)){
                   GerbuikerService.getgerbuikersByAge({age:age})
                   .then((res) => res.json())
                   .then ((gebruikers) => setGerbuikers(gebruikers))
                }
        }else{
            getAllGebruikers()
        }
    }

    return (
        <>
            <Head>
                <title>Gerbuikers</title>
            </Head>
            <Header></Header>
            <main className="min-vh-100">
            <h4 className="text-center mb-4">Gebruikers Overview</h4>
                <section className="row justify-content-center mb-2">
                    <div className="col-6">
                        Age  <input type="text" onKeyUp={handleChange} />
                    </div>
                </section>

                <section className="row justify-content-center">
                    <div className="col-6">
                        <GebruikerOverview gebruikers={gebruikers}/>
                    </div>                
                </section>
            </main>
            <Footer></Footer>
        </>
    )       
}

export default Gebruikers