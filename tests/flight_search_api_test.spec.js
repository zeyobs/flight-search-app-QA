// Import the axios library to make HTTP requests
const axios = require('axios');

// Define a group of tests
describe('Flight Search App API Tests', () => {
  let response;

  beforeAll(async () => {
    try {
      response = await axios.get('https://flights-api.buraky.workers.dev/');
      
    } catch (error) {
      console.error('Error during API request:', error.message);
      throw error; // If an error occurs in this hook, the test suite automatically fails, so the try and catch blocks are not necessary. But I wanted to handle the error.
    }
  });

  test('GET request should return status code 200', () => {
    expect(response.status).toBe(200);
  });

  test('Response should be an array of flights', () => {
    expect(response.data.data).toEqual(
      // Each flight object should include id, from, to, and date properties
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          from: expect.any(String),
          to: expect.any(String),
          date: expect.any(String),
        }),
      ]),
    );
  });

  test('Response should have Content-Type header with value application/json', () => {
    expect(response.headers['content-type']).toEqual(expect.stringContaining('application/json'));
  });
});