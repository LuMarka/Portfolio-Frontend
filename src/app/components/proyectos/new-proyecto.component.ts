import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';


@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP: string;
  descripcionP: string;
  img: string;

  constructor(private proyectoS:ProyectoService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const proyecto = new Proyecto(this.nombreP, this.descripcionP, this.img);
    this.proyectoS.save(proyecto).subscribe(
      data=>{
        //alert("Proyecto añadido exitosamente!");
        this.toastr.success('Elemento añadido correctamente!');
        this.router.navigate(['']);
      }, err=>{
        //alert("Error al añadir proyecto");
        this.toastr.error("ATENCIÓN!! El elemento no pudo ser cargado!");
        this.router.navigate(['']);
      }
    )
  }
}
