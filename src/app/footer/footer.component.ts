import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(private dialog: MatDialog) {}

    openDialog(): void {
      const dialogRef = this.dialog.open(FooterDialogComponent, {
        width: '250px',
        data: { subject: this.subject, sender: this.sender, message: this.message }
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
      private dialogRef: MatDialogRef<FooterDialogComponent>,
      @Inject(MAT_DIALOG_DATA) private data: any,
      private domSanitizer: DomSanitizer,
      //private mdIconRegistry: MdIconRegistry
      // I think I need this for selecting the SVG to santize, but im not sure and it breaks webpack right now
    ) { }

    // close the dialog
    onNoClick(): void {
      this.dialogRef.close();
    }

}
