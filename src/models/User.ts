export interface User {
    uuid: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    password: string,
    inventory: any,
    allies: JSON[],
    explorations: JSON[],
    location: any,
    id: any
}