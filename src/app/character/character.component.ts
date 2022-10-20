import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  private token = "5456885634395471";

  character: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const charId = Number(routeParams.get('charcterId'));

    this.http.get('https://www.superheroapi.com/api.php/' + this.token + '/' + charId).subscribe(
      character => this.character = character
    );
  }

}
