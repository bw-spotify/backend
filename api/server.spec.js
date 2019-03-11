require("dotenv").config();

const request = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
  it("should set up testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});
