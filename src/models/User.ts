// export interface User {
//     uuid: string,
//     firstName: string,
//     lastName: string,
//     email: string,
//     Username: string,
//     password: string,
//     inventory: any,
//     allies: JSON[],
//     explorations: JSON[],
//     location: any,
//     id: any
// }

import { Ally } from "./Ally";
import { Element } from "./Element";
import { Exploration } from "./Exploration";

export interface User {
    uuid: string,
    email: string,
    Username: string,
    name: string,
    surname: string,
    passwordHash: string,
    inventory: {
        inox: number,
        elements: Element[]
    },
    location: string,
    allies: Ally[],
    explorations: Exploration[],
    createdAt: Date,
    updatedAt: Date
}