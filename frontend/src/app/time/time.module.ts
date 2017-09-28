import { ModuleWithProviders, NgModule } from '@angular/core'
import { TimeComponent, TimeService, DetailDialog } from '.'
import { SuperMaterial } from '../super.material'
import { RepositoryService } from '../services/repository.service'
import { HttpModule } from '@angular/http'

@NgModule({
    declarations: [ TimeComponent, DetailDialog ],
    imports: [ SuperMaterial, HttpModule ],
    providers: [ TimeService, RepositoryService ],
    exports: [ TimeComponent ],
    entryComponents: [DetailDialog]
})
export class TimeModule{
    public static forRoot(): ModuleWithProviders {
        return {
          ngModule: TimeModule,
          providers: [TimeService]
        };
    }
}