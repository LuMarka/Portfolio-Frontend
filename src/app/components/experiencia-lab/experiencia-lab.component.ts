import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia-lab',
  templateUrl: './experiencia-lab.component.html',
  styleUrls: ['./experiencia-lab.component.css']
})
export class ExperienciaLabComponent implements OnInit {
  expe:Experiencia[]= [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService, private toastr: ToastrService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.expe = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          //alert ("Elemento eliminado correctamente");
          this.toastr.success('Elemento eliminado correctamente!');
          this.cargarExperiencia();
        }, err => {
          //alert("No se pudo eliminar la experiencia");
          this.toastr.error("El elemento seleccionado no pudo ser eliminado!");
        }
      )
    }
  }
}