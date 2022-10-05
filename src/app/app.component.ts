import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from './models/movies';
import { MovieServiceService } from './appServices/movie-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  sticky = false;
  headerBG: string;
  headerTitle: string;
  random_num: number;
  headerDescription: string;
  headerOverview: string;
  subs: Subscription[] = [];
  trending: Movies;
  popular: Movies;
  topRated: Movies;
  originals: Movies;
  nowPlaying: Movies;
  action: Movies;
  romantic: Movies;
  comedy: Movies;

  @ViewChild('stickyHeader') header: ElementRef;
  
  constructor(private _movie: MovieServiceService) {
    this.getScreenSize();
  }
  //try: string = 'pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg';
  ngOnInit(): void {
    this.subs.push(this._movie.getTrending().subscribe(data => {
      this.trending = data;
      this.random_num = Math.floor(Math.random() * this.trending.results.length-1);
      //console.log('trending');
      this.headerBG = 'https://image.tmdb.org/t/p/original' + this.trending.results[this.random_num].backdrop_path;
      this.headerTitle = this.trending.results[this.random_num].title;
      this.headerOverview = this.trending.results[this.random_num].overview;
      this.headerDescription = this.truncate(this.headerOverview, 150);
      //this.headerBG = 'https://image.tmdb.org/t/p/original/' + this.try ;
      //console.log(this.headerBG);
      //console.log(this.headerTitle);
      //console.log(this.trending);
    }));
    this.subs.push(this._movie.getPopulartMovie().subscribe(data => this.popular = data));
    this.subs.push(this._movie.getTopRated().subscribe(data => this.topRated = data));
    this.subs.push(this._movie.getOriginals().subscribe(data => this.originals = data));
    this.subs.push(this._movie.getNowPlaying().subscribe(data => this.nowPlaying = data));
    this.subs.push(this._movie.getAction().subscribe(data => this.action = data));
    this.subs.push(this._movie.getRomantic().subscribe(data => this.romantic = data));
    this.subs.push(this._movie.getComedy().subscribe(data => this.comedy = data));
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    //this.getScreenSize();
  }
  screenWidth: any;

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenWidth = window.innerWidth - 70;
          //console.log(this.ytWidth);
          if(this.screenWidth<500){
            this.headerDescription = this.truncate(this.headerOverview, 50);
          }
          if((this.screenWidth>500) && (this.screenWidth<800)){
            this.headerDescription = this.truncate(this.headerOverview, 100);
          }
          if((this.screenWidth>800) && (this.screenWidth<1000)){
            this.headerDescription = this.truncate(this.headerOverview, 120);
          }
    }

  truncate(str,n){
    return str?.length>n ? str.substr(0, n-1) + "..." : str;
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

  @HostListener('window : scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.header.nativeElement.offsetHeight) {
      this.sticky = true;
    }
    else {
      this.sticky = false;
    }
  }
}
