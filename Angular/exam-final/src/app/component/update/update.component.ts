import {Component, OnInit} from '@angular/core';
import {SoTietKiemService} from '../../service/so-tiet-kiem.service';
import {SoTietKiem} from '../../model/so-tiet-kiem';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {KyHanService} from '../../service/ky-han.service';
import {KyHan} from '../../model/ki-han';
import {KhachHangService} from '../../service/khach-hang.service';
import {KhachHang} from '../../model/khach-hang';
import {checkDay} from '../../validator/check-day';
import {checkEndDay} from '../../validator/check-end-day';
import {ShowMessage} from '../../common/showMessage';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  public soTietKiem: SoTietKiem;

  public idSoTietKiem: number;

  public updateForm: FormGroup;

  public kyHanList: KyHan[];

  public khachHangList: KhachHang[];

  public check = false;

  constructor(private soTietKiemService: SoTietKiemService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private kyHanService: KyHanService,
              private khachHangService: KhachHangService,
              private showMessage: ShowMessage,
              private router: Router) {
  }

  ngOnInit(): void {

    this.getAllKyHan();

    this.getAllKhachHang();

    this.route.paramMap.subscribe(param => {
      this.idSoTietKiem = Number(param.get('id'));

      this.soTietKiemService.getById(this.idSoTietKiem).subscribe((data: SoTietKiem) => {
          this.soTietKiem = data;

        }, error => console.log(error),
        () => {
          this.updateForm = this.fb.group({
            ngayMoSo: [this.soTietKiem.ngayMoSo, [Validators.required]],
            ngayGui: [this.soTietKiem.ngayGui, [Validators.required, checkDay]],
            soTienGui: [this.soTietKiem.soTienGui, [Validators.required, Validators.min(10000000), Validators.pattern('^\\d*$')]],
            uuDai: [this.soTietKiem.uuDai, [Validators.required]],
            laiXuat: [this.soTietKiem.laiXuat, [Validators.required]],
            kyHan: [this.soTietKiem.kyHan.id, [Validators.required]],
            khachHang: [this.soTietKiem.khachHang.name, [Validators.required, Validators.pattern('^[^\\d]*$')]],
          }, {validators: checkEndDay});

        });

    }, error => console.log(error));
  }


  getAllKyHan() {
    this.kyHanService.getAll().subscribe((data: KyHan[]) => {
      this.kyHanList = data;
    });
  }


  getAllKhachHang() {
    this.khachHangService.getAll().subscribe((data: KhachHang[]) => {
      this.khachHangList = data;
    });
  }

  onSubmit() {
    console.log(this.updateForm);

    if (this.updateForm.invalid) {
      this.showMessage.createFailed();
      this.check = true;
      return;
    }


    this.updateForm.value.khachHang = {
      id: this.soTietKiem.id,
      name: this.updateForm.value.khachHang
    };

    for (let e of this.kyHanList) {
      if (e.id == this.updateForm.value.kyHan) {
        this.updateForm.value.kyHan = e;
      }
    }


    this.soTietKiemService.update(this.updateForm.value, this.soTietKiem.id).subscribe(data => {
      console.log(data);

      this.router.navigateByUrl('/list');

      this.showMessage.createSuccess();
    });

  }
}
