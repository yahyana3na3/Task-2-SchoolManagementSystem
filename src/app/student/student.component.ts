import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {Student} from 'src/app/Arraystudent.component';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
  students:Student[]; 
  constructor() { }
  ngOnInit(): void {
  }
  Addstudent()
  {
    
    let nameInput = (<HTMLInputElement>document.getElementById('validationServer01')).value;
    let idInput = (<HTMLInputElement>document.getElementById('inputID3')).value;
    let gdpaInput = (<HTMLInputElement>document.getElementById('inputGAP3')).value
    let dateInput = (<HTMLInputElement>document.getElementById('example-date-input')).value;
    if (!this.inputValidate(nameInput, idInput, gdpaInput, dateInput)) 
    {

      this.insertstudent(nameInput,idInput,gdpaInput,dateInput);
      alert("Studnet added!");
    }

  }
  inputValidate(name: string, id: string, gba: string, studentdate: string) {

    // check for the value of each element
    let isEmpty = false;
  
    if (name == '') {
      alert("Please insert the student name");
      isEmpty = true;
    }
  
    else if (id == '') {
      alert("Please insert the student id number");
      isEmpty = true;
    }
  
    else if (gba == '') {
      alert("Please insert the student gdpa");
      isEmpty = true;
    }
    else if (studentdate == '') {
      alert("Please insert the student date of birth");
      isEmpty = true;
    }
    return isEmpty;
  }
  insertstudent(Name, Id, Gba, stuDate,)
  {
    let student:Student;
    student = {
      name:Name,
      id: Id,
      gba: Gba,
      studentdate: stuDate,
    }
     this.readFormData(this.students,student);
     alert(student)
  }
  readFormData(students,student:Student) {
    
    students['name'] =student['name'];
    students['id'] =student['id'];
    students['gba'] = student['gba'];
    students['studentdate']=student['studentdate'];
    console.log('hi sir');
    return students;
   
}
}
