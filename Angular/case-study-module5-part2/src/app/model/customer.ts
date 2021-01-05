import {ICustomerType} from './customer-type';

export interface ICustomer {
  id?: number;
  name: string;
  dateOfBirth: string;
  gender: boolean;
  address: string;
  idCard: string;
  phoneNumber: string;
  email: string;
  customerType: ICustomerType;
}
