import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css']
})
export class EditskillComponent implements OnInit {
  skill: Skill = null;
  constructor(private sSkill: SkillService, private activatedRouter: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill.detail(id).subscribe(
      data =>{
        //alert("Usted está por modificar el elemento!!");
        this.toastr.warning('ALERTA!! Usted está por modificar el elemento seleccionado!!');
        this.skill = data;
      }, err =>{
        //alert("Error al modificar la skill!");
        this.toastr.error("Error al modificar el elemento seleccionado!");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill.update(id, this.skill).subscribe(
      data => {
        //alert("Elemento modificado correctamente!");
        this.toastr.success('Elemento modificado correctamente!');
        this.router.navigate(['']);
      }, err =>{
         //alert("Error al modificar la skill!");
         this.toastr.error('Error al modificar el elemento seleccionado!');
         this.router.navigate(['']);
      }
    )
  }

}
