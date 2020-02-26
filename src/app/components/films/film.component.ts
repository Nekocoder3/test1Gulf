import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-film',
    templateUrl: './film.component.html'
})
export class FilmComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  arrFilms: Array<any> = [];
    ngOnInit() {

      this.getFilms();
       // this.getFactorial(3);
    }
    getFactorial(number) {
      return (number === 1 || number === 0) ? 1 : number * this.getFactorial(number - 1);
    }

  getFilms() {
    let urlList = [];
    this.route.queryParams.subscribe(
      params => {
        urlList = params['films'];
      }
    );
    this.arrFilms = [];
    // console.log(person);
    urlList.forEach((url) => {
      this.http.get(url).subscribe(
        film => {
          console.log(film);
          this.arrFilms.push(film);
        }
      );
    });
  }
}
