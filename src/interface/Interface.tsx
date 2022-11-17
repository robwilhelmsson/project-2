interface ICountries {
  name: Name
  region: string
  flags: Image
  common: string
  unMember: boolean
}

interface Name {
  name: string
  common: string
}

interface Image {
  flags: string
  png: string
}

export type Country = Array<ICountries>

interface IRandom {
  flags: {
    png: string
  }
  name: {
    common: string
  }
}

export type Random = null | IRandom


