import { Evaluation } from './evaluation.model';
export class ApprovalRule {
  id: number;
  matterCode:string;
  matterName:string;
  season:string;
  evaluations:Evaluation[];
}
