import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vuelosUI';
  langs: string[] =[];

constructor(private router: Router, private translate: TranslateService){
  this.translate.setDefaultLang('es');
  this.translate.use('es');
  this.translate.addLangs(['es', 'en']);
  this.langs = this.translate.getLangs();
}

listar(){
  return this.router.navigate(['listarVuelos']);
}

cambiarIdioma(lang: string){
this.translate.use(lang);
}

}

