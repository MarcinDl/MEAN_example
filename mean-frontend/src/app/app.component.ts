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
  visitorDataFormEdit:FormGroup;

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

      this.visitorDataFormEdit = this.fb.group({
        visitorNameEdit: ['',Validators.required],
        visitorFamilyNameEdit: ['',Validators.required],
        visitorDateEdit: ['',Validators.required],
        visitorHoursEdit: ['',Validators.required],
        visitorInstitutionEdit: [''],
        visitorCommentEdit: [''],
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

  dataFromEditedForm:any;
  editVisitorData(checkedVisitorData:any){
    console.log(checkedVisitorData)
    this.dataFromEditedForm = checkedVisitorData
    this.visitorDataFormEdit.setValue({
      visitorNameEdit: checkedVisitorData.visitorName,
      visitorFamilyNameEdit: checkedVisitorData.visitorFamilyName,
      visitorDateEdit: checkedVisitorData.visitorDate,
      visitorHoursEdit: checkedVisitorData.visitorHours,
      visitorInstitutionEdit: checkedVisitorData.visitorInstitution,
      visitorCommentEdit: checkedVisitorData.visitorComment
    })
  }

  addVisitDetailsEdit(){
    console.log(this.dataFromEditedForm);

    const noweDane = {
      _id: this.dataFromEditedForm._id,
      visitorName: this.visitorDataFormEdit.get('visitorNameEdit')?.value,
      visitorFamilyName: this.visitorDataFormEdit.get('visitorFamilyNameEdit')?.value,
      visitorDate: this.visitorDataFormEdit.get('visitorDateEdit')?.value,
      visitorHours: this.visitorDataFormEdit.get('visitorHoursEdit')?.value,
      visitorInstitution: this.visitorDataFormEdit.get('visitorInstitutionEdit')?.value,
      visitorComment: this.visitorDataFormEdit.get('visitorCommentEdit')?.value,
    }

    console.log("dane po edycji", noweDane);

    this.visitorDataService.editVisitorData(noweDane).subscribe( () => {
      this.getAllVisitorsData();
    });
  }

  deleteVisitorData(id:any){
      this.visitorDataService.removeVisitorData(id).subscribe( () => {
        this.getAllVisitorsData();
      });
  }

}
