import { Component, OnInit } from '@angular/core';
import { ApprovalRuleService } from '../approval-rule.service';
import { ApprovalRule } from '../model/approval-rule.model';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'matterCode', 'season', 'year', 'options'];
  approvalRules: ApprovalRule[];

  constructor(private approvalRuleService: ApprovalRuleService,
    private router: Router,
    private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.approvalRules = [{
      "id": 1,
      "matterCode": "OID45",
      "matterName": "Matematica 4",
      "season": "1er semestres",
      "year": 2010,
      "evaluations": [
        {
          "date": "2019-06-18T03:00:00.000Z",
          "gradeType": "NUMERIC",
          "approvalScore": "5",
          "recoveryChances": 1,
          "promotable": true,
          "approvalPromoScore": "3",
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
    }
    ]
  }

  edit(id) {
    this.router.navigate(['update/' + id]);
  }

  getApprovalRules() {
    this.approvalRuleService.all().subscribe((res) => {
      this.approvalRules = res;
    });
  }


}
