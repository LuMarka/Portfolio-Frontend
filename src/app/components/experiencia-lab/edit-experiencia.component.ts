import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  explab: Experiencia = null;

  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data =>{
        //alert("Usted está apunto de modificar el elemento!!");
        this.toastr.warning('ALERTA!! Usted está por modificar el elemento seleccionado!!');
        this.explab = data;
      }, err =>{
        //alert("Error al modificar experiencia");
        this.toastr.error("Error al modificar el elemento seleccionado!");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.explab).subscribe(
      data => {
        //alert("Elemento modificado correctamente!");
        this.toastr.success('Elemento modificado correctamente!');
        this.router.navigate(['']);
      }, err =>{
         //alert("Error al modificar experiencia");
         this.toastr.error('Error al modificar el elemento seleccionado!');
         this.router.navigate(['']);
      }
    )}
}