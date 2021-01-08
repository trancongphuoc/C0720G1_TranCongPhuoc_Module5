import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DeleteComponent} from '../delete/delete.component';
import {SoTietKiemService} from '../../service/so-tiet-kiem.service';
import {SoTietKiem} from '../../model/so-tiet-kiem';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public soTietKiemList: SoTietKiem[];

  public page = 1;

  public selete: string = '';

  constructor(private dialog: MatDialog,
              private soTietKiemService: SoTietKiemService) {
  }

  ngOnInit(): void {
    this.getAllSoTietKiem();
  }


  getAllSoTietKiem() {
    this.soTietKiemService.getAll().subscribe((data: SoTietKiem[]) => {
      this.soTietKiemList = data;
    }, error => console.log(error));
  }

  openDialog(soTietKiem) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '800px',
      data: {soTietKiem: soTietKiem}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  search(value: any) {
    if (this.selete === 'id') {
      this.soTietKiemService.searchById(Number(value)).subscribe(data => this.soTietKiemList = data);
    } else if (this.selete === 'name') {
      this.soTietKiemService.searchByName(value).subscribe(data => this.soTietKiemList = data);
    } else {
      this.getAllSoTietKiem();
    }
  }


}
