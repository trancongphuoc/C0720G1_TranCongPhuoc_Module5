import {IRentType} from './rent-type';
import {IServiceType} from './service-type';

export interface IService {
  id?: number;
  name: string;
  area: number;
  cost: number;
  description: string;
  image: string;
  amountPeople: number;
  numberOfFloor: number;
  poolArea: number;
  status: boolean;
  rentType: IRentType;
  serviceType: IServiceType;
}
