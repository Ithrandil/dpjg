import {IExperience} from "./IExperience";
import {IBasicProfileInformations} from "./IBasicProfileInformations";
import {ISchoolCurriculum} from "./ISchoolCurriculum";
import {ISkill} from "./ISkill";
import {ISocialNetwork} from "./ISocialNetwork";


export interface IProfile {
  basicProfileInformations: IBasicProfileInformations;
  summary: string;
  experiences: IExperience[];
  schoolCurriculum: ISchoolCurriculum[];
  skills: ISkill[];
  socialNetworks?: ISocialNetwork[];
}
