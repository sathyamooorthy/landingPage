import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonal',
  templateUrl: './testimonal.component.html',
  styleUrls: ['./testimonal.component.css']
})
export class TestimonalComponent implements OnInit {
test = [
{
img : "assets/img/testimonials-1.jpg",
title : "Margaret E.",
description : "This is fantastic! Thanks so much guys!"
},
{
  img : "assets/img/testimonials-2.jpg",
  title : "Fred S.",
  description : "Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
  },
  {
    img : "assets/img/testimonials-3.jpg",
    title : "Sarah W.",
    description : "Thanks so much for making these free resources available to us!"
    }

]

  constructor() { }

  ngOnInit() {
  }

}
