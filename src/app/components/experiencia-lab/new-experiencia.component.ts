import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router, private toastr: ToastrService) { }


  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(
      data => {
        //alert("Experiencia añadida");
        this.toastr.success('Elemento añadido correctamente!');
        this.router.navigate(['']);
      }, err => {
        //alert("Falló");
        this.toastr.error("ATENCIÓN!! El elemento no pudo ser cargado!");
        this.router.navigate(['']);
      }
    )
  }

}
