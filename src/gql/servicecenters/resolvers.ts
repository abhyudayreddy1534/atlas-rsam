import { RequestArg } from "../common/interfaces.js";
import { ServiceCenterRequest } from "../generated/resolverTypes.js";
import { ServiceCenterDataSource } from "./datsources/ServiceCenterDataSource.js";



export const serviceResolvers = {

    Query: {
      async serviceCenters(_, args: RequestArg<ServiceCenterRequest>,ctx) {
        return ServiceCenterDataSource.exec(args.request,ctx);
      },

      
    }
  };