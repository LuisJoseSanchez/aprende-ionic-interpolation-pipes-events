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
    path: 'example01',
    loadChildren: () => import('./pages/example01/example01.module').then( m => m.Example01PageModule)
  },
  {
    path: 'example02',
    loadChildren: () => import('./pages/example02/example02.module').then( m => m.Example02PageModule)
  },
  {
    path: 'example03',
    loadChildren: () => import('./pages/example03/example03.module').then( m => m.Example03PageModule)
  },
  {
    path: 'example04',
    loadChildren: () => import('./pages/example04/example04.module').then( m => m.Example04PageModule)
  },
  {
    path: 'example05',
    loadChildren: () => import('./pages/example05/example05.module').then( m => m.Example05PageModule)
  },
  {
    path: 'example06',
    loadChildren: () => import('./pages/example06/example06.module').then( m => m.Example06PageModule)
  },
  {
    path: 'example07',
    loadChildren: () => import('./pages/example07/example07.module').then( m => m.Example07PageModule)
  },
  {
    path: 'example08',
    loadChildren: () => import('./pages/example08/example08.module').then( m => m.Example08PageModule)
  },
  {
    path: 'example09',
    loadChildren: () => import('./pages/example09/example09.module').then( m => m.Example09PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
