export interface CartItems {
    id: number
    name: string
    price: number
    quantity: number
    category: string
}

export const cartItems: CartItems[] = [
    { id: 1, name: "Bagel 🥯", price: 5.99, quantity: 3, category: "Pastry" },
    { id: 2, name: "Cookies 🍪", price: 1.99, quantity: 6, category: "Pastry" },
    { id: 3, name: "Bubble Tea 🧋", price: 3.99, quantity: 1, category: "Beverage" },
]