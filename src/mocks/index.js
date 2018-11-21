import * as NewsMocks from './News'
import * as DonationMocks from './Donation'
import * as QueryMocks from './Query'
import * as ApplicationMocks from './Application'
import * as MutationMocks from './Mutation'
export * from './currentUser'

export default {
  ...DonationMocks,
  ...NewsMocks,
  ...QueryMocks,
  ...ApplicationMocks,
  ...MutationMocks
}
