const request = require("supertest");

const server = require("../api/server.js");

describe("/api/users", () => {
  it("should return 200", async () => {
    const res = await request(server).get("/api/users");

    expect(res.status).toBe(200);
  });
});
