import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'test-sonar',
        data: { pageTitle: 'projetsonarApp.testSonar.home.title' },
        loadChildren: () => import('./test-sonar/test-sonar.routes'),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
