import {KhachHang} from './khach-hang';
import {KyHan} from './ki-han';

export interface SoTietKiem {
  id?: number;
  ngayMoSo: string;
  ngayGui: string;
  soTienGui: number;
  laiXuat: number,
  uuDai: string;
  khachHang: KhachHang;
  kyHan: KyHan;
}
