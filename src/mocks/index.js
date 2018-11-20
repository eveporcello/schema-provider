import * as NewsMocks from './News'
import * as DonationMocks from './Donation'
import * as QueryMocks from './Query'
import * as MemberMocks from './Member'

export default {
  ...DonationMocks,
  ...NewsMocks,
  ...QueryMocks,
  ...MemberMocks
}
