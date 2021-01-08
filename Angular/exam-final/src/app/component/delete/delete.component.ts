import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SoTietKiemService} from '../../service/so-tiet-kiem.service';
import {ShowMessage} from '../../common/showMessage';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private soTietKiemService: SoTietKiemService,
              private showMessage: ShowMessage) {
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  delete() {
    this.soTietKiemService.deleteById(this.data.soTietKiem.id).subscribe();

    this.dialogRef.close();

    this.dialogRef.afterClosed().subscribe(() => {
      this.showMessage.deleteSuccess();
    });
  }
}
