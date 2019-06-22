import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, ParamMap } from "@angular/router";
import { ApprovalRuleService } from '../approval-rule.service';
import { ApprovalRule } from '../model/approval-rule.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  approvalRule: ApprovalRule;
  constructor(private approvalRuleService: ApprovalRuleService,
     private router : Router,
     private route: ActivatedRoute,) { }

  sendEvaluatios(approvalRule:ApprovalRule){
      this.approvalRuleService.update(approvalRule).subscribe((res) => {
        console.log(res);
      });
  }

  ngOnInit() {
    this.approvalRule = {
      "id": 1,
      "matterCode": "OID45",
      "matterName": "Matematica 4",
      "season": "1er semestresssss",
      "year": 2010,
      "evaluations": [
        {
          "date": "2019-06-18T03:00:00.000Z",
          "gradeType": "NUMERIC",
          "approvalScore": "5",
          "recoveryChances": 1,
          "promotable": true,
          "approvalPromoScore": "8",
          "recoveryPromotable": true,
          "topics": [
            {
              "name": "probabilidad",
              "weight": 5
            },
            {
              "name": "estadistica",
              "weight": 5
            }
          ]
        }
      ]
    };
  }

  get(){
    const id = +this.route.snapshot.paramMap.get('id');
    // this.approvalRuleService.get(id).subscribe((res) => {
    //   this.approvalRule = res;
    // });
  }



}
