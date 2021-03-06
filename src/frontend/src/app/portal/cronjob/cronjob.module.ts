import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CreateEditCronjobComponent } from './create-edit-cronjob/create-edit-cronjob.component';
import { CronjobComponent } from './cronjob.component';
import { ListCronjobComponent } from './list-cronjob/list-cronjob.component';
import { ListJobComponent } from './list-job/list-job.component';
import { CreateEditCronjobTplComponent } from './create-edit-cronjobtpl/create-edit-cronjobtpl.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PublishCronjobTplComponent } from './publish-tpl/publish-tpl.component';
import { CronjobClient } from '../../shared/client/v1/kubernetes/cronjob';
import { JobClient } from '../../shared/client/v1/kubernetes/job';
import { CronjobService } from '../../shared/client/v1/cronjob.service';
import { CronjobTplService } from '../../shared/client/v1/cronjobtpl.service';
import { PodClient } from '../../shared/client/v1/kubernetes/pod';
import { PublicService } from '../../shared/client/v1/public.service';
import { LogClient } from '../../shared/client/v1/kubernetes/log';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [
    CronjobService,
    CronjobTplService,
    CronjobClient,
    JobClient,
    PublicService,
    PodClient,
    LogClient,
  ],
  exports: [
    CronjobComponent
  ],
  declarations: [
    CronjobComponent,
    ListCronjobComponent,
    ListJobComponent,
    CreateEditCronjobComponent,
    CreateEditCronjobTplComponent,
    PublishCronjobTplComponent,
  ]
})

export class CronjobModule {
}
