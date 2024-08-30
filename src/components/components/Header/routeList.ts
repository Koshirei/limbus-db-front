export interface RouteItemInterface {
  name: string;
  translationKey: string
}

export const homepageRoute: RouteItemInterface = {
  name: 'index',
  translationKey: 'Homepage'
}

export const RouteList: RouteItemInterface[] = [
  {
    name: 'identities',
    translationKey: 'Identities'
  },
  // {
  //   name: 'egos',
  //   translationKey: 'E.G.Os'
  // }
  // ,
  {
    name: 'identities2',
    translationKey: 'test'
  },
]


// export const RouteItemInterface