export interface Ally {
  uuid: string,
  name: string,
  asset: string,
  stats: {
    life: number,
    speed: number,
    power: number,
    shield: number
  },
  books: string[],
  affinity: string,
  essence: number,
  kernel: string[],
  crypto: {
    hash: string,
    signature: string
  },
  archiveIndex: number,
  createdAt: Date,
  updateAt: Date,
  expireAt: Date,
  href: string,
}