import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  showMessageSucces(msg: string) {
    this.snackBar.open(msg, 'OK', 
    {duration: 2000,
     horizontalPosition: 'right',
     verticalPosition: 'top',
     panelClass: 'success'
    })
  }

  showMessageError(msg: string) {
    this.snackBar.open(msg, 'OK', 
    {duration: 2000,
     horizontalPosition: 'right',
     verticalPosition: 'top',
     panelClass: 'success'
    })
  }
}
