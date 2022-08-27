import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-newskill',
  templateUrl: './newskill.component.html',
  styleUrls: ['./newskill.component.css']
})
export class NewskillComponent implements OnInit {
  progreso: number;
  img:string;

  constructor(private skillS:SkillService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const skill = new Skill(this.img, this.progreso);
    this.skillS.save(skill).subscribe(
      data=>{
        //alert("Skill añadida correctamente!");
        this.toastr.success('Elemento añadido correctamente!');
        this.router.navigate(['']);
      }, err=>{
        //alert("Error al añadir skill");
        this.toastr.error("ATENCIÓN!! El elemento no pudo ser cargado!");
        this.router.navigate(['']);
      }
    )
  }
}