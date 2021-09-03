import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmeComponent } from './pages/filme/filme.component';
import { ImcComponent } from './pages/imc/imc.component';

const routes: Routes = [
    { path: '',   redirectTo: '/filme', pathMatch: 'full' },
    { path: 'filme', component: FilmeComponent },
    { path: 'imc', component: ImcComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }