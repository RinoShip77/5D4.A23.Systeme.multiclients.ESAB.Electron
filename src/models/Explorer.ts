import { Ally } from "./Ally";
import { Element } from "./Element";
import { Exploration } from "./Exploration";

export interface Explorer {
    uuid: string,
    email: string,
    username: string,
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