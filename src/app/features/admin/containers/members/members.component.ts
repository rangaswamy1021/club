import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MemberDetailModelComponent } from '@features/admin/components/member-detail-model/member-detail-model.component';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(MemberDetailModelComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
