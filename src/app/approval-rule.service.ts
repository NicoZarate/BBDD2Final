import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ApprovalRule } from './model/approval-rule.model';

@Injectable({
  providedIn: 'root'
})
export class ApprovalRuleService {
  baseUrl: string = 'http://192.168.0.15:8080';
  constructor(private httpClient: HttpClient) { }

  create(approvalRule: ApprovalRule) {
    this.httpClient.post(this.baseUrl + '/approval_rule', approvalRule, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    }).subscribe((res) => {
      console.log(res);
    });
  }
}
