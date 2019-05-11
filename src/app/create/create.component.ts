import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Evaluation } from '../model/evaluation.model';
import { ApprovalRule } from '../model/approval-rule.model';
import { ApprovalRuleService } from '../approval-rule.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder,private approvalRuleService: ApprovalRuleService) { }

  evaluationForm: FormGroup;
  numberScores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  letterScores = ['A', 'B', 'C', 'D', 'E', 'F'];
  approvalRule: ApprovalRule = new ApprovalRule();

  ngOnInit() {
    /* Initiate the form structure */
    this.evaluationForm = this.fb.group({
      evaluations: this.fb.array([this.fb.group({
        date: '',
        gradeType: 'NUMERIC',
        approvalScore: 0,
        recoveryChances: 0,
        promotable: false,
        approvalPromoScore: '',
        recoveryPromotable: false,
        topics: this.fb.array([this.createTopic()]),
      })
      ])
    })
  }


  createTopic() {
    return this.fb.group({
      name: '',
      weight: 0,
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
        gradeType: 'NUMERIC',
        approvalScore: 0,
        recoveryChances: 0,
        promotable: false,
        approvalPromoScore: '',
        recoveryPromotable: 'false',
        topics: this.fb.array([
          this.createTopic()
        ]),
      }
    )
    );
  }

  addTopic(i) {
    const control = (<FormArray>this.evaluationForm.get('evaluations') as FormArray).at(i).get('topics') as FormArray;
    control.push(this.createTopic());
  }

  deleteTopic(pointIndex, topicIndex) {
    const control = (<FormArray>this.evaluationForm.get('evaluations') as FormArray).at(pointIndex).get('topics') as FormArray;
    control.removeAt(topicIndex);
  }

  deleteEvaluation(index) {
    this.getEvaluations.removeAt(index);
  }

  sendEvaluatios(){
      this.approvalRule.matterCode="OID45";
      this.approvalRule.matterName="Matematica 4";
      this.approvalRule.season="1er semestre";
      this.approvalRule.evaluations=this.evaluationForm.value.evaluations;
      this.approvalRuleService.create(this.approvalRule);
  }

  reset(){
    this.evaluationForm.reset();
    this.ngOnInit();
  }

}
