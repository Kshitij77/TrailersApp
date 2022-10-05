import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../../models/movies';
import movieTrailer from 'movie-trailer';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {

  //@Input() sliderConfig;
  @Input() movies: Movies;
  @Input() title: String;
  clicked: boolean = false;
  trailerUrl: string;
  //setTrailerUrl;
  ytWidth: any;
  ytHeight: any;

  sliderConfig = {
    slidesToShow: 7,
    slidesToScroll: 2,
    arrows: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 5.2
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 250,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 200,
        settings: "unslick"
      }
    ]
  };
  constructor() {
    this.getScreenSize();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.ytWidth = window.innerWidth - 70;
          this.ytHeight = window.innerHeight - 500;
          console.log(this.ytWidth);
    }


  trailer(res) {
    //console.log(res);
    movieTrailer(res?.title || res?.original_title || res?.original_name || "")
      .then(url => {
        this.clicked = true;
        const urlParams = new URLSearchParams(new URL(url).search);
        this.trailerUrl = urlParams.get('v');
        console.log(this.trailerUrl);
        //console.log(res);
      })
      .catch((error) => console.log(error));
      //this.ytWidth = 1300;
  }
}

