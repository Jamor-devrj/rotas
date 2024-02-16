import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // recupera informações da url 

  constructor(
    private parametrizador: ActivatedRoute,
    private navegador:Router
    ) { // injeção de dependecia
    
    
    //RECUPERA PELO ID ------>  http://localhost:4200/portifolio/{1} <--- ID
    this.parametrizador.params.subscribe(
      res => console.log(res)
    )
    this.parametrizador.firstChild?.params.subscribe(
      res => console.log(res)
    )

   //RECUPERA INFORMAÇÕES DO USUARIO ----> http://localhost:4200/portifolio/1?{name=jaime&token=123} <---- INFOMAÇÕES DO USUARIO
   this.parametrizador.queryParams.subscribe(
    res => console.log(res)
   )
  }

  ngOnInit(): void {
    //forca o navegador a voltar para a pagina home '/'
//    setInterval(()=>{ 
//      this.navegador.navigate(['/'])
//    }, 5000)
  }
}
