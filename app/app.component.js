"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Annonces';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  \n    <nav class=\"navbar navbar-inverse\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n              <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>                        \n              </button>\n              <a class=\"navbar-brand\" href=\"#\" title=\"{{title}}\">Logo</a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n              <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a routerLink=\"/dashboard\" routerLinkActive=\"active\">Accueil</a></li>\n                <li><a href=\"#\">About</a></li>\n                <li><a href=\"#\">Contact</a></li>\n              </ul>\n              <ul class=\"nav navbar-nav navbar-right\">\n                <li><a routerLink=\"/admin\" routerLinkActive=\"active\"><span class=\"glyphicon glyphicon-log-in\"></span> Plubier vos annonces</a></li>\n              </ul>\n            </div>\n        </div>\n    </nav>\n    \n    <router-outlet></router-outlet>\n  ",
        styleUrls: ['./app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map