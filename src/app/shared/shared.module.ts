import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';

import { CustomMaterialModule } from '../custom-material.module';
import { SearchFormComponent } from '../search/search-form/search-form.component';

@NgModule({
    declarations: [
      SearchFormComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      CustomMaterialModule
    ],
    exports: [
      SearchFormComponent
    ]
})
export class SharedModule {}