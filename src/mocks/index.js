import * as NewsMocks from './News'
import * as DonationMocks from './Donation'
import * as QueryMocks from './Query'

export default {
    ...DonationMocks,
    ...NewsMocks,
    ...QueryMocks
}