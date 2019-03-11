const request = require("supertest");

const server = require("../api/server.js");
const Users = require("./users-model.js");

// describe("/api/users", () => {
//   describe("routes", () => {
//     describe("GET /", () => {
//       it("should return 200", async () => {
//         const res = await request(server).get("/api/users");

//         expect(res.status).toBe(200);
//       });
//       it("should return a list of users", async () => {
//         const user = await request(server).get("/api/users");

//         expect(user.body).toBeInstanceOf(Array);
//       });
//     });
//   });
//   describe("User Model", () => {
//     describe("get()", () => {
//       it("should return users from the db", async () => {
//         const users = await Users.get();

//         expect(users).toBeDefined();
//       });
//     });
//     describe("", () => {});
//   });
// });
