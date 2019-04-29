import {Topic} from "./topic.model";
export class Evaluation   {
    date: string;
    gradeType: number;
    approvalScore: string;
    countRecovery: number;
    promotable: boolean;
    approvalPromoScore: string;
    recoveryPromotable: boolean;
    topics: Topic[];
  }
