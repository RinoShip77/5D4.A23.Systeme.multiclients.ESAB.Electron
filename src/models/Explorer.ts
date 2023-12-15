import { Ally } from "./Ally";
import { Element } from "./Element";
import { Exploration } from "./Exploration";

export interface Explorer {
    inventory: {
        inox: number,
        elements: Element[]
    },
    location: string,
    email: string,
    username: string,
    name: string,
    surname: string,
    createdAt: Date,
    updatedAt: Date,
    href: string,
    allies: Ally[],
    explorations: Exploration[]
}