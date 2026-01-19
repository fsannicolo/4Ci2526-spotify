export interface IArtist {
  external_urls: ExternalUrls
  followers: Followers
  genres: string[]
  href: string
  id: string
  images: Image[]
  name: string
  popularity: number
  type: string
  uri: string
}

export interface ExternalUrls {
  spotify: string
}

export interface Followers {
  href: any
  total: number
}

export interface Image {
  url: string
  height: number
  width: number
}
