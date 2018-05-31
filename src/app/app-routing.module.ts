import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TutorialComponent} from './components/tutorial.component';
import {BookComponent} from './components/book.component';

const appRoutes: Routes = [
    {
        path: '',
        component: TutorialComponent
    },
    {
        path: 'books',
        component: BookComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
