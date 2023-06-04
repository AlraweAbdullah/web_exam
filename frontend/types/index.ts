export interface Country{
    name: string
}

export interface Book{
    id?: number
    title: string
    pages: number
    categories: Category[]
    author: Author

}

export interface Author{
    id? : number
    name: string
    country: string
}

export interface Category{
    id: number
    name: string
}

export interface StatusMessage{
    type: string
    message: string
}



export interface User{
    username: string
    password: string
}


export interface Gebruiker{
    id?: number
    name: string
    email: string
    city: string
    age: number
}

