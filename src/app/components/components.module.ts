import { NgModule } from '@angular/core';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';

@NgModule({
    declarations: [
        AComponent,
        BComponent,
        CComponent
    ],
    exports: [
        AComponent,
        BComponent,
        CComponent
    ],
})

export class ComponentsModule {}