import faker from 'faker'

export const NewsStory = () => ({
    id: faker.random.uuid(),
    title: faker.lorem.sentence(),
    description: (Math.random() < .75) ? faker.lorem.paragraph() : null,
    url: faker.internet.url()
})
