export interface User {
    uuid: string,
    email: string,
    username: string,
    password: string,
    inventory: any,
    allies: JSON[],
    explorations: JSON[],
    name: string,
    surname: string
}