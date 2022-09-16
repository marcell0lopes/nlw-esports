export interface GameParams {
  id: string;
  bannerUrl: string;
  title: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: GameParams;
    }
  }
}
