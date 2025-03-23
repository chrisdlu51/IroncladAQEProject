/// <reference types="cypress" />

describe("API Test - JSONPlaceholder", () => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
  
    it("GET /posts should return a list of posts", () => {
      cy.request("GET", `${baseUrl}/posts`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");
        expect(response.body.length).to.be.greaterThan(0);
      });
    });
  
    it("POST /posts should create a new post", () => {
      cy.request("POST", `${baseUrl}/posts`, {
        title: "Cypress Test Post",
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
        title: "Updated Post Title",
        body: "Updated post content.",
        userId: 1,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.title).to.eq("Updated Post Title");
      });
    });
  
    it("DELETE /posts/1 should delete a post", () => {
      cy.request("DELETE", `${baseUrl}/posts/1`).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
  