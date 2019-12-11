import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

    // Observable string sources
    private setContentSource = new Subject<string>();
    private openBarSource = new Subject<string>();

    // Observable string streams
    setContent$ = this.setContentSource.asObservable();
    openBar$ = this.openBarSource.asObservable();

    // Service message commands
    setContent(mission: string) {
        this.setContentSource.next(mission);
    }

    openBar(astronaut: string) {
        this.openBarSource.next(astronaut);
    }

}
