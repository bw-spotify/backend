const request = require("supertest");

const server = require("../api/server.js");
const Songs = require("./songs-model.js");

describe("/api/songs", () => {
  describe("routes", () => {
    describe("GET /", () => {
      it("should return 200", async () => {
        const res = await request(server).get("/api/songs");

        expect(res.status).toBe(200);
      });
      it("should return a list of songs", async () => {
        const songs = await request(server).get("/api/songs");

        expect(songs.body).toBeInstanceOf(Array);
      });
    });
  });
  describe("Songs Model", () => {
    describe("get()", () => {
      it("should return songs from the db", async () => {
        const query = {
          page: 1,
          limit: 10,
          sortby: "artist_name",
          sortdir: "desc"
        };
        const songs = await Songs.get(query);
        expect(songs).toBeDefined();
      });
    });
  });
});
