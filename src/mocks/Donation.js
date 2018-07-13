import faker from 'faker'

export const DonationOption = () => ({
    id: faker.random.uuid(),
    reward: faker.lorem.words(Math.random() < .5 ? 2 : 3),
    price: faker.commerce.price(),
    active: true
})
