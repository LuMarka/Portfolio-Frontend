import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';
import { Skill } from 'src/app/model/skill';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: Skill[] = [];
  
  constructor(private skillS:SkillService, private tokenService:TokenService, private toastr: ToastrService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkill();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarSkill(): void {
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete(id?: number){
    if(id!=undefined){
      this.skillS.delete(id).subscribe(
        data => {
          //alert ("Elemento eliminado correctamente");
          this.toastr.success('Elemento eliminado correctamente!');
          this.cargarSkill();
        }, err => {
          //alert("No se pudo eliminar");
          this.toastr.error("El elemento seleccionado no pudo ser eliminado!");
        }
      )
    }
  }
}

