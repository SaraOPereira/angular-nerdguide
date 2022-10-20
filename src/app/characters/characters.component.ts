import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})

export class CharactersComponent implements OnInit {

  characters: any = [];
  i = 1;

  private token = "5456885634395471";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.onLoadMore();
  }

  onLoadMore(): void{
    let next = this.i + 8;
    for(this.i; this.i < next; this.i++){
      this.http.get('https://www.superheroapi.com/api.php/' + this.token + '/' + this.i).subscribe(
        char => {
          this.characters.push(char)
        }
      );
    }
  }

  overlayShow(id: number): void{
    var allOver = document.querySelectorAll(".overlay");
    var fullId = "char-" + id;

    for(var i = 0; i < allOver.length; i++){
      if(allOver[i].id != fullId && allOver[i].classList.contains("active")){
        allOver[i].classList.remove("active");
      }
    }

    document.getElementById(fullId)?.classList.toggle("active");
  }
}
