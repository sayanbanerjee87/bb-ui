import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataObserverService {

  private subject = new Subject<any>();

    sendMessage(accountBalance: number) {
        this.subject.next({ balance: accountBalance });
    }

    clearMessages() {
        this.subject.next();
    }

    onMessage(): Observable<any> {
        return this.subject.asObservable();
    }

}
