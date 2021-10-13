import { GetDetailsNews } from '../src/services/newsService';
describe('news  Service', () => {
    test('get new by ID', async () => {
        const response = await GetDetailsNews('1')
        expect(response.data).toHaveProperty('name')
        expect(response.data).toHaveProperty('content')
        expect(response.data).toHaveProperty('image')
        expect(response.data).toHaveProperty('categoryId')
        expect.assertions(4)
    })
    test('test news service with fake ID ', async () => {
       try{
       await GetDetailsNews('333333333000');
       }catch(err){
       expect(err).toBeDefined();
       expect.assertions(1);
       } 
   
    })

})


