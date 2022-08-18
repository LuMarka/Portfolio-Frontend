import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ExperienciaLabComponent } from './components/experiencia-lab/experiencia-lab.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { interceptorProvider } from './service/interceptor-service';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './components/experiencia-lab/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia-lab/edit-experiencia.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { NewskillComponent } from './components/skills/newskill.component';
import { EditskillComponent } from './components/skills/editskill.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SocialMediaComponent,
    BannerComponent,
    AcercadeComponent,
    ExperienciaLabComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditEducacionComponent,
    NewEducacionComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    NewskillComponent,
    EditskillComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule

  ],
  providers: [
   interceptorProvider
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
