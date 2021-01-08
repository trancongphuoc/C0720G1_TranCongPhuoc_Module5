import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable( {
  providedIn: 'root'
})

export class ShowMessage {

  constructor(private toastr: ToastrService) {
  }

  createSuccess() {
    this.toastr.success('Thêm mới thành công', 'Thành công', {
      timeOut: 1000
    });
  }

  createFailed() {
    this.toastr.error('Thêm mới thất bại', 'Thất bại', {
      timeOut: 1000
    });
  }

  updateSuccess() {
    this.toastr.success('Cập nhật thành công', 'Thành công', {
      timeOut: 1000
    });
  }

  updateFailed() {
    this.toastr.error('Cập nhật thất bại', 'Thất bại', {
      timeOut: 1000
    });
  }

  deleteSuccess() {
    this.toastr.success('Xóa thành công', 'Thành công', {
      timeOut: 1000
    });
  }

  deleteFailed() {
    this.toastr.error('Xóa thất bại', 'Thất bại', {
      timeOut: 1000
    });
  }
}
