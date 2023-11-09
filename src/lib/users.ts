export interface User {
    id: number
    name: string
    address: {
        city: string
        zipcode: number
    }
}