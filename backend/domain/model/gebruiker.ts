export class Gebruiker {
    readonly id: number;
    readonly name: string;
    readonly email: string;
    readonly city: string;
    readonly age: number;

    
    
    constructor (gebruiker : {id:number, name:string,  email:string, city:string, age: number}){
        this.id  =  gebruiker.id
        this.name = gebruiker.name
        this.email = gebruiker.email
        this.city = gebruiker.city
        this.age = gebruiker.age
    }

    static create(id:number, name:string,  email:string, city:string, age: number){
        return new Gebruiker( {id:id, name:name, email:email,city:city, age:age})
    }
}