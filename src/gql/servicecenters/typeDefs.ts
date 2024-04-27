import { gql } from 'apollo-server-core'

export const serviceTypeDefs = gql`

  extend type Query {
    serviceCenters(request: ServiceCenterRequest!): ServiceCentersResponse
  } 

input ServiceCenterRequest{
    truckId: String!
  }

type ServiceCentersResponse{
   id: Int
   temperatureInCelcius: Int
   lastName: String
   firstName: String
   travelTime: String
   batteries: Int
   weightInLbs: Int
   preSoldCount: Int
   dealers: [Dealer]
   success: Boolean
   messages: String
}

type Dealer{
    id: Int
    name: String
    location: String
    totalBatteries: Int
    products: [Product]
    status: Boolean
    profileURL: String
    presoldBatteries: Int
    batteriesCount: Int
    totalWeightInLbs: Int
    totalWeightInKgs: Int
    lastDeliveredDate: String
    notes: [Note]
    loadCompleted: Boolean
    loadSkipped: Boolean
}

type Product {
    id: Int
    name: String
    shelf: String
    bayNumber: String
    proposed: Int
    total: Int
}

type Note {
  id: Int
  note: String
}
  `;