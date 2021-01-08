import {AbstractControl} from '@angular/forms';

export function checkDay(c: AbstractControl) {

    const dayNow = new Date();
    let day = dayNow.getDate() > 10 ? 0 + '' + dayNow.getDate() : dayNow.getDate();
    let month = dayNow.getMonth() > 10 ? 0 + '' + (dayNow.getMonth() + 1) : dayNow.getMonth();
    let year = dayNow.getFullYear();


    const nowDay = year + '-' + month + '-' + day;

    if (dateDiff(parseDate(nowDay), parseDate(c.value)) < 0) {
      console.log(dateDiff(parseDate(nowDay), parseDate(c.value)));
      console.log('Ok');

      return {dayError: true}
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
