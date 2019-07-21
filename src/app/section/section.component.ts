import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  flag = false;
  sections =[
{
 img : "url('assets/img/bg-showcase-1.jpg')",
  title:"Fully Responsive Design",
  description : "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
},
{
  img : "url('assets/img/bg-showcase-2.jpg')",
   title:"Updated For Bootstrap 4",
   description : "Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!"
 },
 {
  img : "url('assets/img/bg-showcase-3.jpg')",
   title:"Easy to Use & Customize",
   description : "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
 }
 ];

  constructor() { }
  ngOnInit() {
  }

}
