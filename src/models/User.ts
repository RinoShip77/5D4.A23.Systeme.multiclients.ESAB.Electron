export interface User {
    uuid: string,
    email: string,
    username: string,
    password: string,
    inventory: JSON[],
    allies: JSON[],
    explorations: JSON[]
}