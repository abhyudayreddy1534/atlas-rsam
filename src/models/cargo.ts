import { Double } from "mongodb";
import { dealer } from "./dealer";


export interface cargo {
    id : number;
    temperatureInCelcius: number;
    lastName: string;
    firstName: string;
    travelTime: Double;
    batteries: number;
    weightInLbs: number;
    preSoldCount: number;
    dealers: [dealer];
}