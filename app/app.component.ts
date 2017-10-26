import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>                        
              </button>
              <a class="navbar-brand" href="#" title="{{title}}">Logo</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav">
                <li class="active"><a routerLink="/dashboard" routerLinkActive="active">Accueil</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li><a routerLink="/admin" routerLinkActive="active"><span class="glyphicon glyphicon-log-in"></span> Plubier vos annonces</a></li>
              </ul>
            </div>
        </div>
    </nav>
    
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Annonces';
}
