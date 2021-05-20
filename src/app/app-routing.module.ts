import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cad-usuario',
    loadChildren: () => import('./cad-usuario/cad-usuario.module').then( m => m.CadUsuarioPageModule)
  },
  {
    path: 'visu-estabelecimento',
    loadChildren: () => import('./visu-estabelecimento/visu-estabelecimento.module').then( m => m.VisuEstabelecimentoPageModule)
  },
  {
    path: 'cad-estabelecimento',
    loadChildren: () => import('./cad-estabelecimento/cad-estabelecimento.module').then( m => m.CadEstabelecimentoPageModule)
  },
  {
    path: 'visu-cardapio',
    loadChildren: () => import('./visu-cardapio/visu-cardapio.module').then( m => m.VisuCardapioPageModule)
  },
  {
    path: 'cad-cardapio',
    loadChildren: () => import('./cad-cardapio/cad-cardapio.module').then( m => m.CadCardapioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
