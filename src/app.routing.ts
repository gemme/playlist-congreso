import { Routes, RouterModule } from '@angular/router';
import { SongsComponent } from './app/songs/songs.component';
import { NotFoundComponent } from './app/not-found/not-found.component';

const ROUTES: Routes = [
    {
        path: '', component: SongsComponent
    },
    {
        path: '', component: SongsComponent
    },
    {
        path: '**', component: NotFoundComponent
    }
];

const routing = RouterModule.forRoot(ROUTES);

export default routing;