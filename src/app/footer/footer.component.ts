import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  // inputs on dialog
  subject: string;
  sender: string;
  message: string;

  constructor(public dialog: MatDialog) {}

    openDialog(): void {
      const dialogRef = this.dialog.open(FooterDialogComponent, {
        width: '250px',
        data: { sunject: this.subject, sender: this.sender, message: this.message }
      });

      // this could be used to do something similar
      // to what I did with toast in AngularJS
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });

  }

  ngOnInit() {
  }

}

  @Component({
    selector: 'app-footer-dialog',
    templateUrl: './footer.component.dialog.html'
  })

  export class FooterDialogComponent  {

    constructor(
      public dialogRef: MatDialogRef<FooterDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    // close the dialog
    onNoClick(): void {
      this.dialogRef.close();
    }

}
