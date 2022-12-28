import {IExperience} from "./IExperience";
import {IBasicProfileInformations} from "./IBasicProfileInformations";
import {ISchoolCurriculum} from "./ISchoolCurriculum";


export interface IProfile {
  basicProfileInformations: IBasicProfileInformations;
  summary: string;
  experiences: IExperience[];
  schoolCurriculum: ISchoolCurriculum[];
}
