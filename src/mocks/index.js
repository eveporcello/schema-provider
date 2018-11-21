import * as NewsMocks from './News'
import * as DonationMocks from './Donation'
import * as QueryMocks from './Query'
import * as ApplicationMocks from './Application'
export * from './currentUser'

export default {
  ...DonationMocks,
  ...NewsMocks,
  ...QueryMocks,
  ...ApplicationMocks
}
