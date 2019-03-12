const request = require("supertest");

const server = require("../api/server.js");

describe("/api/users/:id/faves", () => {
  describe("routes", () => {
    describe("GET /:id/faves", () => {
      it("should return 200", async () => {
        const res = await request(server).get("/api/users/1/faves");

        expect(res.status).toBe(200);
      });
      it("should return id 1", async () => {
        const res = await request(server).get("/api/users/1/faves");

        expect(res.body).toBeInstanceOf(Array);
      });
    });
  });
  describe("Faves Model", () => {
    describe("getUserFaves(id)", () => {
      it("should return 200", async () => {
        const res = await request(server).get("/api/users/1/faves");

        expect(res.status).toBe(200);
      });
      it("should return a list of songs", async () => {
        const res = await request(server).get("/api/users/1/faves");

        expect(res.body).toBeInstanceOf(Array);
      });
    });
  });
});
