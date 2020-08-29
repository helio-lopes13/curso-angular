import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.css']
})
export class ExemploPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd Ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };
  
  livros: string[] = ['Java', 'Python', 'Angular'];

  filtro: string;

  addCurso(valor: string) {
    this.livros.push(valor);
  }

  obterCursos() {
    if (this.livros.length === 0 || this.filtro === undefined 
      || this.filtro.trim() === '') {
        return this.livros;
    }

    return this.livros.filter(
      (v) => {
        if (v.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
          return true;
        }
        return false;
      }
    );
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000);
  });

  valorAsync2 = interval(2000).pipe(map((valor) => ('Valor assíncrono 2')));

  constructor() { }

  ngOnInit(): void {
  }


}
