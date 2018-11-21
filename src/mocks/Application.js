import faker from 'faker'

export const Application = () => ({
  id: faker.random.uuid(),
  member: {
    email: () => 'alex@moonhighway.com',
    name: () => 'Alex Banks'
  },
  demographics: {
    complete: faker.random.boolean(),
    dateOfBirth: faker.date.past(1),
    address1: faker.address.streetAddress('###'),
    address2: faker.address.secondaryAddress(),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    zip: faker.address.zipCode(),
    phone: faker.phone.phoneNumberFormat(),
    gender: () => 'gender',
    ethnicity: () => 'ethnicity',
    injuryDate: faker.date.past(1)
  },
  guidelines: {
    complete: faker.random.boolean(),
    timesApplied: faker.random.number(5),
    usOrCanadaResident: faker.random.boolean(),
    degenerativeDisease: faker.random.boolean(),
    healthCoverage: faker.random.boolean(),
    returnToSports: faker.random.boolean()
  },
  injuryInfo: {
    complete: faker.random.boolean(),
    description: faker.lorem.sentence(),
    recoveryGoals: faker.lorem.sentence(),
    reachingRecoveryGoals: faker.lorem.sentence()
  },
  icuInfo: {
    complete: faker.random.boolean(),
    daysInICU: faker.random.number(20),
    nameOfHospital: `${faker.hacker.abbreviation()} Hospital`,
    daysInInpatientRehab: faker.random.number(20),
    nameOfRehabHospital: `${faker.hacker.abbreviation()} Hospital`
  },
  circumstances: {
    complete: faker.random.boolean(),
    participatingInSport: faker.random.boolean(),
    notParticipatingInSport: faker.random.boolean()
  },
  healingNetwork: {
    complete: faker.random.boolean(),
    resources: faker.lorem.sentence(10),
    amount: faker.random.number(20)
  },
  livingExpenses: {
    complete: faker.random.boolean(),
    resources: faker.lorem.sentence(10),
    amount: faker.random.number(20)
  },
  insurance: {
    complete: faker.random.boolean(),
    resources: faker.lorem.sentence(10),
    amount: faker.random.number(20)
  },
  adaptiveEquipment: {
    complete: faker.random.boolean(),
    resources: faker.lorem.sentence(10),
    amount: faker.random.number(20)
  },
  winterEquipment: {
    complete: faker.random.boolean(),
    resources: faker.lorem.sentence(10),
    amount: faker.random.number(20)
  },
  programs: {
    complete: faker.random.boolean(),
    resources: faker.lorem.sentence(10),
    amount: faker.random.number(20)
  },
  health: {
    complete: faker.random.boolean(),
    resources: faker.lorem.sentence(10),
    amount: faker.random.number(20)
  },
  travel: {
    complete: faker.random.boolean(),
    resources: faker.lorem.sentence(10),
    amount: faker.random.number(20)
  },
  personalInfo: {
    complete: faker.random.boolean(),
    paidProfessional: faker.random.boolean(),
    club: faker.random.boolean(),
    socialSecurity: faker.random.boolean(),
    adjustedGrossIncome: faker.random.number(100000)
  }
})
