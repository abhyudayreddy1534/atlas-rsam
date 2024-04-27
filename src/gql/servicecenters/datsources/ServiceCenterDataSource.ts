import { CargoRepository } from "../../../repositories/CargoRepository.js";
import { GqlContext } from "../../../gql/common/GqlContext.js";
import { ServiceCenterRequest, ServiceCentersResponse } from "../../../gql/generated/resolverTypes.js";
import { cargo } from "../../../models/cargo.js";
import { toBoolean } from "../../../gql/common/helpers.js";

export class ServiceCenterDataSource {

    static async exec(request: ServiceCenterRequest, context: GqlContext): Promise<ServiceCentersResponse> {
        const response = await CargoRepository.getCargoDetails(parseInt(request.truckId));
        if(!response){
            const gqlResponse : ServiceCentersResponse ={
                success : false,
                messages: "Unable to find the truck details"
            }
            return gqlResponse;
        }
        const gqlResponse = this.toGqlResponse(response);
        return gqlResponse;
    }

    static async toGqlResponse(response: cargo): Promise<ServiceCentersResponse> {
        const gqlResponse: ServiceCentersResponse = {
            id: response.id,
            temperatureInCelcius: response.temperatureInCelcius,
            lastName: response.lastName,
            firstName: response.firstName,
            travelTime: response.travelTime.toString(),
            batteries: response.batteries,
            weightInLbs: response.weightInLbs,
            preSoldCount: response.preSoldCount,
            dealers: response.dealers.map(d => ({
                id: d.id,
                name: d.name,
                location: d.location,
                totalBatteries: d.totalBatteries,
                products: d.products.map(p => ({
                    id: p.id,
                    name: p.name,
                    shelf: p.shelf,
                    bayNumber: p.bayNumber,
                    proposed: p.proposed,
                    total: p.total
                })),
                status: d.status,
                profileURL: d.profileURL,
                presoldBatteries: d.presoldBatteries,
                batteriesCount: d.batteriesCount,
                totalWeightInLbs: d.totalWeightInLbs,
                totalWeightInKgs: d.totalWeightInLbs,
                lastDeliveredDate: d.lastDeliveredDate,
                notes: d.notes.map(n => ({
                    id: n.id,
                    note: n.note
                })),
                loadCompleted: toBoolean(d.loadCompleted),
                loadSkipped: toBoolean(d.loadSkipped),
                success: true
            }))
        }
        return gqlResponse;
    }

}