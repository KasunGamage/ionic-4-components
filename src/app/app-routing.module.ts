import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'getting-started',
    loadChildren:
      './pages/getting-started/getting-started.module#GettingStartedPageModule'
  },
  {
    path: 'buttons',
    loadChildren: './pages/buttons/buttons.module#ButtonsPageModule'
  },
  {
    path: 'components',
    loadChildren: './pages/components/components.module#ComponentsPageModule'
  },
  {
    path: 'bottom-sheet',
    loadChildren:
      './pages/bottom-sheet/bottom-sheet.module#BottomSheetPageModule'
  },
  {
    path: 'loading',
    loadChildren: './pages/loading/loading.module#LoadingPageModule'
  },
  {
    path: 'password',
    loadChildren: './pages/password/password.module#PasswordPageModule'
  },
  {
    path: 'toolbar-search',
    loadChildren:
      './pages/toolbar-search/toolbar-search.module#ToolbarSearchPageModule'
  },
  {
    path: 'app-bar',
    loadChildren: './pages/app-bar/app-bar.module#AppBarPageModule'
  },
  {
    path: 'viewport',
    loadChildren: './pages/viewport/viewport.module#ViewportPageModule'
  },
  { path: 'icon', loadChildren: './pages/icon/icon.module#IconPageModule' },
  {
    path: 'dialog',
    loadChildren: './pages/dialog/dialog.module#DialogPageModule'
  },
  { path: 'image', loadChildren: './pages/image/image.module#ImagePageModule' },
  {
    path: 'refresh',
    loadChildren: './pages/refresh/refresh.module#RefreshPageModule'
  },
  {
    path: 'expandable',
    loadChildren: './pages/expandable/expandable.module#ExpandablePageModule'
  },
  {
    path: 'stepper',
    loadChildren: './pages/stepper/stepper.module#StepperPageModule'
  },
  {
    path: 'directives',
    loadChildren: './pages/directives/directives.module#DirectivesPageModule'
  },
  {
    path: 'editable-label',
    loadChildren:
      './pages/editable-label/editable-label.module#EditableLabelPageModule'
  },
  {
    path: 'feature-discovery',
    loadChildren:
      './pages/feature-discovery/feature-discovery.module#FeatureDirectoryPageModule'
  },
  {
    path: 'installation',
    loadChildren:
      './pages/installation/installation.module#InstallationPageModule'
  },
  {
    path: 'developer-tools',
    loadChildren:
      './pages/developer-tools/developer-tools.module#DeveloperToolsPageModule'
  },
  {
    path: 'backbutton',
    loadChildren: './pages/backbutton/backbutton.module#BackButtonPageModule'
  },
  { path: 'fab', loadChildren: './pages/fab/fab.module#FabPageModule' },
  { path: 'test', loadChildren: './test/test.module#TestPageModule' },
  {
    path: '**',
    loadChildren:
      './pages/page-not-found/page-not-found.module#PageNotFoundPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
