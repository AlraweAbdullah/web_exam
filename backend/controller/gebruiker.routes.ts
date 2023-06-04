/**
* @swagger
*   components:
*    schemas:
*      Gebruiker:
*        type: object
*        properties:
*          id: 
*            type: number
*            format: int64
*          name: 
*            type: string
*            description: name
*          email:
*            type: string 
*            description: email
*          city:
*            type: string 
*            description: city
*          age:
*            type: number
*            format: int64 
*            description: age
*/       

import Express,{Request, Response} from "express";
import gebruikerService from "../service/gebruiker.service";
import { json } from "body-parser";


const gerbuikerRouter = Express.Router()


/**
* @swagger
* /gebruikers:
*   get:
*     security:
*       - bearerAuth: []
*     summary: Get list all gerbuikers
*     responses:
*       200:
*         description: List of all gebruikers
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Gebruiker'
*       404:
*         description: Error
*    
*/
gerbuikerRouter.get("/",async(req:Request, res:Response) =>{
    try{
        const gebruikers = await gebruikerService.getAllGebruikers();
        res.status(200).json(gebruikers)
    }catch(error){
        res.status(500).json({status:'error', errorMessage: error.message})
    }
})

/**
* @swagger
* /gebruikers/size:
*   get:
*     security:
*       - bearerAuth: []
*     summary: Count all gerbuikers
*     responses:
*       200:
*         description: Amount of  all gebruikers
*       404:
*         description: Error
*    
*/
gerbuikerRouter.get("/size",async(req:Request, res:Response) =>{
    try{
        const gebruikers = await gebruikerService.countAllGebruikers();
        res.status(200).json(gebruikers)
    }catch(error){
        res.status(500).json({status:'error', errorMessage: error.message})
    }
})


/**
* @swagger
* /gebruikers/{id}:
*   get:
*     security:
*       - bearerAuth: []
*     summary: Get a gebruiker by id
*     responses:
*       200:
*         description: Returns a gebruiker, if not then an error is returned 
*         content:
*           application/json:
*             schema:
*                $ref: '#/components/schemas/Gebruiker'
*     parameters :
*        - name: id
*          in: path
*          description: id of the gebruiker
*          required: true
*          type: integer
*          format: int64    
*    
*/
gerbuikerRouter.get("/:id",async (req:Request, res:Response) =>{
    try{
        const id:number = parseInt(req.params.id)
        const gebruiker = await gebruikerService.getGebruikerById({id: id});
        res.status(200).json(gebruiker)
    }catch(error){
        res.status(500).json({status:'error', errorMessage: error.message})
    }
    
})



/**
* @swagger
* /gebruikers/age/{age}:
*   get:
*     security:
*       - bearerAuth: []
*     summary: Get a gebruikers by age
*     responses:
*       200:
*         description: Returns gebruikers, if not then an error is returned 
*         content:
*           application/json:
*             schema:
*                $ref: '#/components/schemas/Gebruiker'
*     parameters :
*        - name: age
*          in: path
*          description: age of the gebruikers
*          required: true
*          type: integer
*          format: int64    
*    
*/
gerbuikerRouter.get("/age/:age",async (req:Request, res:Response) =>{
    try{
        const age:number = parseInt(req.params.age)
        const gebruiker = await gebruikerService.getGerbruikersByAge({age: age});
        res.status(200).json(gebruiker)
    }catch(error){
        res.status(500).json({status:'error', errorMessage: error.message})
    }
    
})




export {gerbuikerRouter}