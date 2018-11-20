import faker from 'faker'

export const Member = () => ({
  email: faker.internet.email(),
  name: faker.name.findName()
})
