const request = require('supertest');
const app = require('../server');

describe('GET /api/hello', () => {
  it('should return a welcome message', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toBe(200);
    // This test will fail because the actual message is "Hello from backend"
    expect(res.body.message).toBe('Hello, World!');
  });
});