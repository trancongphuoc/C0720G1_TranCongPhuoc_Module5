import {ILevel} from './level';
import {IPosition} from './position';
import {IDivision} from './division';

export interface IEmployee {
  id?: number;
  name: string;
  dateOfBirth: string;
  gender: boolean;
  address: string;
  idCard: string;
  phoneNumber: string;
  email: string;
  level: ILevel;
  position: IPosition;
  division: IDivision;
}
