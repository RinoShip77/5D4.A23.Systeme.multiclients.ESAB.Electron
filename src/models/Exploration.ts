import { Element } from "./Element"

export interface Exploration {
  explorationDate: Date,
  destination: string,
  affinity: string,
  vault: {
    inox: number,
    elements: Element[]
  }
}