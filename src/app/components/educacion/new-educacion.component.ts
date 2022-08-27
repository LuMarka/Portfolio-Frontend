import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  descripcionE: string;
  nombreE: string;
  

  constructor(private educacionS: EducacionService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  onCreate(): void{
    const educacion = new Educacion(this.descripcionE, this.nombreE );
    this.educacionS.save(educacion).subscribe(
      data =>{
        //alert("Educacion añadida correctamente");
        this.toastr.success('Elemento añadido correctamente!');
        this.router.navigate(['']);
      }, err =>{
        //alert("falló");
        this.toastr.error("ATENCIÓN!! El elemento no pudo ser cargado!");
        this.router.navigate(['']);
      }
    )
    }
  }