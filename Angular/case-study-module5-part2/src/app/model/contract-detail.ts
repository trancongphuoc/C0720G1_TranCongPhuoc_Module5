import {IAttachService} from './attach-service';
import {IContract} from './contract';

export interface IContractDetail {
  id?: number;
  attachService: IAttachService;
  amount: number;
  contract: IContract;
}
