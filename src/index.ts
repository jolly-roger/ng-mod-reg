import { enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';


const IMPORTS = '__ng__mod_reg_imports__';
const DECLARATIONS = '__ng__mod_reg_declarations__';
const PROVIDERS = '__ng__mod_reg_providers__';
const BOOTSTRAP = '__ng__mod_reg_bootstrap__';

class NgModReg {
    regImport(mod: any) {
        if (!window[IMPORTS]) {
            window[IMPORTS] = [];
        }
        
        window[IMPORTS].push(mod);
    }
    regDeclaration(declaration: any) {
        if (!window[DECLARATIONS]) {
            window[DECLARATIONS] = [];
        }
        
        window[DECLARATIONS].push(declaration);
    }
    regProvider(provider: any) {
        if (!window[PROVIDERS]) {
            window[PROVIDERS] = [];
        }
        
        window[PROVIDERS].push(provider);
    }
    regBootstrap(boostrap: any) {
        if (!window[BOOTSTRAP]) {
            window[BOOTSTRAP] = [];
        }
        
        window[BOOTSTRAP].push(boostrap);
    }
    bootstrap() {
        if (!window[IMPORTS]) {
            window[IMPORTS] = [];
        }
        
        if (!window[DECLARATIONS]) {
            window[DECLARATIONS] = [];
        }
        
        if (!window[PROVIDERS]) {
            window[PROVIDERS] = [];
        }
        
        if (!window[BOOTSTRAP]) {
            window[BOOTSTRAP] = [];
        }
        
        window[IMPORTS].push(BrowserModule);
        
        @NgModule({
            declarations: window[DECLARATIONS],
            imports: window[IMPORTS],
            providers: window[PROVIDERS],
            bootstrap: window[BOOTSTRAP]
        })
        class AppModule { }
        
        platformBrowserDynamic().bootstrapModule(AppModule);
    }
}

let ngModReg = new NgModReg();

window['ngModReg'] = ngModReg;

export default ngModReg;