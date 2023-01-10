export interface ISocialNetwork {
    type: socialNetwork | string;
    url: string;
    wording: string;
}

export enum socialNetwork {
  LINKEDIN = 'linkedin',
  GITHUB = 'github',
  FACEBOOK= 'facebook',
  INSTAGRAM='instagram',
  OTHER='other'
}
