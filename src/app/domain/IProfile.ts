import {IExperience} from "./IExperience";
import {IBasicProfileInformations} from "./IBasicProfileInformations";



export interface IProfile {
  basicProfileInformations: IBasicProfileInformations;
  summary: string;
  experiences: IExperience[];
}
