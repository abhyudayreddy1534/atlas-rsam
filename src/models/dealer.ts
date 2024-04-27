import { note } from "./note";
import { product } from "./product";

export interface dealer {
    id : number;
    name: string;
    location: string;
    totalBatteries: number;
    products : [product];
    status: boolean;
    profileURL: string;
    presoldBatteries: number;
    batteriesCount: number;
    totalWeightInLbs: number;
    totalWeightInKgs: number;
    lastDeliveredDate: string;
    notes: [note];
    loadCompleted: boolean;
    loadSkipped: boolean;
}