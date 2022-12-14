import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private token = "5456885634395471";

  charOne: any; charTwo: any;
  
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('https://www.superheroapi.com/api.php/' + this.token + '/70').subscribe(
      charOne => this.charOne = charOne
    );
    this.http.get('https://www.superheroapi.com/api.php/' + this.token + '/346').subscribe(
      charTwo => this.charTwo = charTwo
    );
  }
}
