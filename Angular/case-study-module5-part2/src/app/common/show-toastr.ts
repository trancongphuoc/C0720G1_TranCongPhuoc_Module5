import {ToastrService} from 'ngx-toastr';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ShowToastr {

  constructor(private toastr: ToastrService) {
  }

  showToastrRegisterSuccess() {
    this.toastr.success('Thêm mới thành công', 'Thành công', {
      timeOut: 1000
    });
  }

  showToastrRegisterError() {
    this.toastr.error('Vui lòng nhập đúng tất cả các trường', 'Thất bại', {
      timeOut: 1000
    });
  }


  showToastrUpdateSuccess() {
    this.toastr.success('Cập nhật thành công', 'Thành công', {
      timeOut: 1000
    });
  }

  showToastrUpdateError() {
    this.toastr.error('Cập nhật thất bại', 'Thất bại', {
      timeOut: 1000
    });
  }

  showToastrDeleteSuccess() {
    this.toastr.success('Xóa thành công', 'Thành công', {
      timeOut: 1000
    });
  }

  showToastrDeleteError() {
    this.toastr.warning('Xóa không thành công', 'Thất bại', {
      timeOut: 1000
    });
  }


  showToastrIsNotExistContract() {
    this.toastr.warning('Chưa có hợp đồng nào', 'Thất bại', {
      timeOut: 1000
    });
  }
}
