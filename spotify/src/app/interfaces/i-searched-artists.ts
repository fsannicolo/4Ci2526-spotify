export interface ISearchedArtists {
  artists: Artists
}

export interface Artists {
  href: string
  limit: number
  next: string
  offset: number
  previous: any
  total: number
  items: Item[]
}

export interface Item {
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