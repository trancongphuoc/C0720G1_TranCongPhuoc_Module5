import {IEmployee} from './employee';
import {ICustomer} from './customer';
import {IService} from './service';

export interface IContract {
  id?: number;
  startDay: string;
  endDay: string;
  deposit: number;
  totalMoney: number;
  employee: IEmployee;
  customer: ICustomer;
  service: IService;
}
