import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VisitorDataService } from './services/visitor-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  allVisitorsDataArray:any = [];
  visitorDataForm:FormGroup;

  constructor(
    private visitorDataService:VisitorDataService,
    private fb:FormBuilder
    ){
      this.visitorDataForm = this.fb.group({
        visitorName: ['',Validators.required],
        visitorFamilyName: ['',Validators.required],
        visitorDate: ['',Validators.required],
        visitorHours: ['',Validators.required],
        visitorInstitution: [''],
        visitorComment: [''],
      })
  }

  ngOnInit(){
    this.getAllVisitorsData();
  }

  addVisitDetails(){
    const dataForm:any = {
      visitorName: this.visitorDataForm.get('visitorName')?.value,
      visitorFamilyName: this.visitorDataForm.get('visitorFamilyName')?.value,
      visitorDate: this.visitorDataForm.get('visitorDate')?.value,
      visitorHours: this.visitorDataForm.get('visitorHours')?.value,
      visitorInstitution: this.visitorDataForm.get('visitorInstitution')?.value,
      visitorComment: this.visitorDataForm.get('visitorComment')?.value,
    }

    console.log(dataForm);

    this.visitorDataService.createVisit(dataForm).subscribe((data:any) => {
      console.log(data);
      alert("dane zostały dodane do bazy");
      this.getAllVisitorsData();
    }, err => {
      console.log("Wystąpił błąd",err);
    })
  }

  getAllVisitorsData(){
    this.visitorDataService.getAllVisitorsData().subscribe( (data:any) =>{
      this.allVisitorsDataArray = data;
    })
  }
}
