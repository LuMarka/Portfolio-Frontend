import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = null;
  
  constructor(
    private educacionS: EducacionService,
    private activatedRouter : ActivatedRoute,
    private router: Router, 
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      data =>{
       //alert("Usted está apunto de modificar el elemento!!");
       this.toastr.warning('ALERTA!! Usted está por modificar el elemento!!');
        this.educacion = data;
      }, err =>{
         //alert("Error al intentar modificar el campo educación");
         this.toastr.info("No se pudo modificar el campo educación!");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(
      data => {
        //alert("Elemento modificado correctamente!");
        this.toastr.success('Elemento modificado correctamente!');
        this.router.navigate(['']);
      }, err => {
        //alert("Error al intentar modificar el campo educación");
        this.toastr.error("No se pudo modificar el campo educación!");
        this.router.navigate(['']);
      }
    )
  }

}
