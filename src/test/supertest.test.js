import chai from "chai";
import supertest from "supertest";

const expect = chai.expect;
const requester = supertest("http://localhost:8080");

describe("Testing Adoptme", () => {
  describe("Test de router adoption", () => {
    it("Endpoint /api/adoptions devuelve todas las adopciones", async () => {
      const { statusCode, ok, _body } = await requester.get("/api/adoptions");
      console.log(statusCode);
      console.log(ok);
      console.log(_body);
      console.log();

      expect(_body.status).to.equal("success");
      expect(Array.isArray(_body.payload)).to.equal(true);
    });

    it("Endpoint /api/adoptions/:aid devuelve una adopcion con base en el ID", async () => {
      const aid = "676f0f7153cd42a1562a4164";

      const { statusCode, ok, _body } = await requester.get(
        `/api/adoptions/${aid}`
      );
      console.log(statusCode);
      console.log(ok);
      console.log(_body);

      expect(_body.status).to.equal("success");
      expect(_body.payload).to.have.property("_id");
    });

    it("Endpoint /api/adoptions/:uid/:pid devuelve una adopcion con base en el ID", async () => {
      const pid = "673d417a448d0af3cf5d89fc";
      const uid = "673d417b448d0af3cf5d8a0c";

      const { statusCode, ok, _body } = await requester.post(
        `/api/adoptions/${uid}/${pid}`
      );
      console.log(statusCode);
      console.log(ok);
      console.log(_body);

      expect(_body.status).to.equal("success");
      expect(_body.message).to.equal("Pet adopted");
    });
  });
});
