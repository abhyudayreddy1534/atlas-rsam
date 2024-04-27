import { cargo } from "../models/cargo.js";
import { DB } from "./DB.js";


export class CargoRepository {

    static async getCargoDetails(cargoId: number): Promise<cargo | undefined> {
        const cargoDoc = await DB.cargo.findOne({ id : cargoId });
        return cargoDoc ?? undefined;
    }
}