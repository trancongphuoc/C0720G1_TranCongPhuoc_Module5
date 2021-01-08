import {AbstractControl} from '@angular/forms';

export function checkEndDay(c: AbstractControl) {
  if (c.value.ngayMoSo !== '' && c.value.ngayGui) {

    if (dateDiff(parseDate(c.value.ngayGui), parseDate(c.value.ngayMoSo)) < 0) {
      console.log('a');
      return {dayEndError: true};
    }
  }

  return null;

}

function parseDate(str: string) {
  let dmy = str.split('-');
  return new Date(Number(dmy[0]), Number(dmy[1]) - 1, Number(dmy[2]));
}


function dateDiff(first, second) {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}
