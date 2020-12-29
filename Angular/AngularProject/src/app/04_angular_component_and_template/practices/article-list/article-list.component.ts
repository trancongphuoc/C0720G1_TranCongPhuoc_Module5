import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {


  articleList = [
    {
      title: 'Nam thanh niên vượt biên và 9 người nhập cảnh mắc Covid-19',
      url: 'https://zingnews.vn/nam-thanh-nien-vuot-bien-va-9-nguoi-nhap-canh-mac-covid-19-post1167345.html',
    },
    {
      title: '7 người Việt bị bắt tại Campuchia vì nhập cảnh chui từ Thái Lan',
      url: 'https://zingnews.vn/7-nguoi-viet-bi-bat-tai-campuchia-vi-nhap-canh-chui-tu-thai-lan-post1167684.html#zingweb_home_sectionfeatured6'
    },
    {
      title: 'Hơn 100 người nhập cảnh trái phép từ Trung Quốc về Việt Nam',
      url: 'https://zingnews.vn/hon-100-nguoi-nhap-canh-trai-phep-tu-trung-quoc-ve-viet-nam-post1167671.html#zingweb_home_sectionfeatured7'
    },
    {
      title: 'Thủ tướng: Phát hiện BN1440 nhờ người mẹ đi báo chính quyền',
      url: 'https://zingnews.vn/thu-tuong-phat-hien-bn1440-nho-nguoi-me-di-bao-chinh-quyen-post1167686.html'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
