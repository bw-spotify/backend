const request = require("supertest");

const server = require("../api/server.js");
const Users = require("./users-model.js");

describe("/api/users", () => {
  describe("routes", () => {
    describe("GET /", () => {
      it("should return 200", async () => {
        const res = await request(server).get("/api/users");

        expect(res.status).toBe(200);
      });
      it("should return a list of users", async () => {
        const res = await request(server).get("/api/users");

        expect(res.body).toBeInstanceOf(Array);
      });
    });
    describe("GET /:id", () => {
      it("should return 200", async () => {
        const res = await request(server).get("/api/users/1");

        expect(res.status).toBe(200);
      });
      it("should return id 1", async () => {
        const res = await request(server).get("/api/users/1");

        expect(res.body.id).toBe(1);
      });
    });
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
  describe("User Model", () => {
    describe("get()", () => {
      it("should return users from the db", async () => {
        const res = await Users.get();

        expect(res).toBeDefined();
      });
    });
    describe("get(id)", () => {
      it("should return users from the db", async () => {
        const res = await Users.get(1);

        expect(res.id).toBe(1);
      });
    });
    describe("getUserFaves(id)", () => {
      it("should return 200", async () => {
        const res = await request(server).get("/api/users/1/faves");

        expect(res.status).toBe(200);
      });
      it("should return a list of songs", async () => {
        const user = await request(server).get("/api/users");

        expect(user.body).toBeInstanceOf(Array);
      });
    });
  });
});
