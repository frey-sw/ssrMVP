import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { TrackerModule } from '../tracker/tracker.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    TrackerModule,
  ],
  exports: [
    DashboardComponent,
  ],
})
export class DashboardModule {}
