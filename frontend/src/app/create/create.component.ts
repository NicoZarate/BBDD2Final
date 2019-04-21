import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  evaluationForm: FormGroup;
  numberScores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  letterScores = ['A', 'B', 'C', 'D', 'E', 'F'];

  ngOnInit() {
    /* Initiate the form structure */
    this.evaluationForm = this.fb.group({
      evaluations: this.fb.array([this.fb.group({
        date: '',
        gradeType: 'numeric',
        approvalScore: '',
        countRecovery: 0,
        promotable: false,
        approvalPromoScore: '',
        recoveryPromotable: false,
        topics: this.fb.array([this.createTopic()]),
      })
      ])
    })
  }

  get getEvaluations() {
    return this.evaluationForm.get('evaluations') as FormArray;
  }
  getTopics(form) {
    return form.controls.topics.controls;
  }


  addEvaluation() {
    this.getEvaluations.push(this.fb.group(
      {
        date: '',
        gradeType: 'numeric',
        approvalScore: '',
        countRecovery: 0,
        promotable: false,
        approvalPromoScore: '',
        recoveryPromotable: 'false',
        topics: this.fb.array([this.createTopic()]),
      }
    )
    );
  }

  deleteEvaluation(index) {
    this.getEvaluations.removeAt(index);
  }

  createTopic(){
   return  this.fb.group({
      name: '',
      weight: '',
    })
  }

  addTopic(i) {
    const control = <FormArray>this.myForm.get('evaluations').controls[i].get('topics');
    // console.log(control);
    control.push(this.createTopic());
  }



}
