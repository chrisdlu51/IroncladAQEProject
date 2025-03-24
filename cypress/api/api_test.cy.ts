/// <reference types="cypress" />

describe("API Test - JSONPlaceholder", () => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
  
    it("GET /posts should return a list of posts", () => {
      cy.request("GET", `${baseUrl}/posts`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");
        expect(response.body.length).to.be.greaterThan(0);
        cy.log(response.body);
        for (var v in response.body[0]) {
          cy.log(v, response.body[0][v]);
        }
      });
    });
  
    it("POST /posts should create a new post", () => {
      cy.request("POST", `${baseUrl}/posts`, {
        title: "Cypress test post",
        body: "This is a test post created using Cypress.",
        userId: 1,
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("id");
      });
    });
  
    it("PUT /posts/1 should update a post", () => {
      cy.request("PUT", `${baseUrl}/posts/1`, {
        id: 1,
        title: "Updated post title",
        body: "Updated post content.",
        userId: 1,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.title).to.eq("Updated post title");
      });
    });
  
    it("DELETE /posts/1 should delete a post", () => {
      cy.request("DELETE", `${baseUrl}/posts/1`).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
  