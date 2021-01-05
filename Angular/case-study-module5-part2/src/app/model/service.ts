import {IRentType} from './rent-type';

export interface IService {
  id?: number;
  name: string;
  area: number;
  cost: number;
  description: string;
  image: string;
  amountPeople: number;
  numberOfFloor: number;
  status: boolean;
  rentType: IRentType;
}
