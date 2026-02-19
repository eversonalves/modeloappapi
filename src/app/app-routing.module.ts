import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate:[AuthGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'usuario-add',
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/usuario/usuario-add/usuario-add.module').then( m => m.UsuarioAddPageModule)
  },
  {
    path: 'produto-add',
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/produto/produto-add/produto-add.module').then( m => m.ProdutoAddPageModule)
  },
  {
    path: 'cliente-add',
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/cliente/cliente-add/cliente-add.module').then( m => m.ClienteAddPageModule)
  },
  {
    path: 'usuario-list',
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/usuario/usuario-list/usuario-list.module').then( m => m.UsuarioListPageModule)
  },
  {
    path: 'usuario-edit/:id',
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/usuario/usuario-edit/usuario-edit.module').then( m => m.UsuarioEditPageModule)
  },
  {
    path: 'produto-list',
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/produto/produto-list/produto-list.module').then( m => m.ProdutoListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cliente-edit/:id',
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/cliente/cliente-edit/cliente-edit.module').then( m => m.ClienteEditPageModule)
  },
  {
    path: 'cliente-list',
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/cliente/cliente-list/cliente-list.module').then( m => m.ClienteListPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'endereco-add',
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/endereco/endereco-add/endereco-add.module').then( m => m.EnderecoAddPageModule)
  },
  {
    path: 'endereco-edit',
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/endereco/endereco-edit/endereco-edit.module').then( m => m.EnderecoEditPageModule)
  },
  {
    path: 'endereco-list',
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/endereco/endereco-list/endereco-list.module').then( m => m.EnderecoListPageModule)
  },
  {
    path: 'produto-edit',
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/produto/produto-edit/produto-edit.module').then( m => m.ProdutoEditPageModule)
  },
  {
    path: 'produto-detalhe/:id',
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/produto/produto-detalhe/produto-detalhe.module').then( m => m.ProdutoDetalhePageModule)
  },
  {
    path: 'produto-imagem/:id',
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/produto/produto-imagem/produto-imagem.module').then( m => m.ProdutoImagemPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
