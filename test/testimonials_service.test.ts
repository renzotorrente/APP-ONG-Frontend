import { getTestimonialsPublic } from '../src/services/testimonialsService'

// need create prev testimonials
describe.skip('testimonial Service', () => {
  test('get testimonial by id', async () => {
    const response = await getTestimonialsPublic(1)
    expect(response.data).toHaveProperty('image')
    expect(response.data).toHaveProperty('name')
    expect(response.data).toHaveProperty('address')
    expect(response.data).toHaveProperty('phone')
    expect(response.data).toHaveProperty('welcomeText')
    expect.assertions(5)
  })
})
