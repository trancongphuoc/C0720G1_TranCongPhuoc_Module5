import {ILevel} from './level';
import {IPosition} from './position';
import {IDivision} from './division';

export interface IEmployee {
  id?: number;
  name: string;
  dateOfBirth: string;
  address: string;
  idCard: string;
  numberPhone: string;
  email: string;
  level: ILevel;
  position: IPosition;
  division: IDivision;
}
