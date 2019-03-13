const request = require("supertest");

const server = require("../api/server.js");
const Faves = require("./faves-model.js");

const token = process.env.TEST_TOKEN;

describe("/api/users/:id/faves", () => {
  describe("routes", () => {
    describe("GET /:id/faves", () => {
      it("should return 200", async () => {
        const res = await request(server)
          .get("/api/faves")
          .set("Authorization", token);

        expect(res.status).toBe(200);
      });
      it("should return an array", async () => {
        const res = await request(server)
          .get("/api/faves")
          .set("Authorization", token);

        expect(res.body).toBeInstanceOf(Array);
      });
    });
  });
  describe("Faves Model", () => {
    describe("getUserFaves(id)", () => {
      it("should be defined", async () => {
        const res = await Faves.getUserFaves(1);

        expect(res).toBeDefined();
      });
      describe("add()", () => {
        it("should add a new fave", async () => {
          const res = await Faves.add(8, "5yWrzJklf4DhscRKSZk4Vj");

          expect(res).toBeDefined();
        });
      });
      describe("remove()", () => {
        it("should remove an existing fave", async () => {
          const res = await Faves.remove(8, "5yWrzJklf4DhscRKSZk4Vj");

          expect(res).toBeDefined();
        });
      });
    });
  });
});
