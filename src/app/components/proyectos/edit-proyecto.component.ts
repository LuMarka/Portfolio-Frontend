import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto: Proyecto = null;

  constructor(private proyectoS: ProyectoService, private activatedRouter: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(
      data=>{
        //alert("Usted está apunto de modificar el elemento!!");
        this.toastr.warning('ALERTA!! Usted está por modificar el elemento seleccionado!!');
        this.proyecto = data;
      }, err=>{
        //alert("Error al modificar proyecto");
        this.toastr.error("Error al modificar el elemento seleccionado!");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id=this.activatedRouter.snapshot.params['id'];
    this.proyectoS.update(id, this.proyecto).subscribe(
      data => {
        //alert("Elemento modificado correctamente!");
        this.toastr.success('Elemento modificado correctamente!');
        this.router.navigate(['']);
      },err =>{
        //alert("Error al modificar el proyecto!")
        this.toastr.error("Error al modificar el elemento seleccionado!");
        this.router.navigate(['']);
      }
    )
  }

}
