import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent implements OnInit {
  
  form: FormGroup;
  description:string;
  imagePath:any;
  name : string;
  phoneNumber : string;
  constructor(private dialogRef: MatDialogRef<CourseDialogComponent>){}


  ngOnInit() {

  }

  close() {
    this.dialogRef.close();
  }
  
  add() {
    // console.log(this.form.value);
    var data = {
      photo : this.imagePath,
      name : this.name,
      phoneNumber : this.phoneNumber
    }
    this.dialogRef.close(data);
  }

  addPhoto(file){

    if (file[0].length === 0)
      return;

    var mimeType = file[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(file[0]); 
    reader.onload = (_event) => {
      this.imagePath = reader.result; 
    }
  }
}
