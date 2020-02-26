import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router)  {}
  Tatooine: any;
  arrPersons: Array<any> = [];

  //
  //
  ngOnInit() {
    this.getTatooine();
    // this.show({nombre:'new', a:'new'});
  }
  //
  //
  getTatooine() {
    this.http.get('https://swapi.co/api/planets/1').subscribe(
        data => {
          this.Tatooine = data;
          this.getResidents(data['residents']);
        });
  }

  getResidents(val) {
    // console.log(val);
    val.forEach((person) => {
      this.http.get(person).subscribe(
          resident => {
            console.log(resident);
            this.arrPersons.push(resident);
          }
      );
    });
  }

}
