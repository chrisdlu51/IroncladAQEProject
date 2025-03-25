/// <reference types="cypress" />

describe("API Test - JSONPlaceholder", () => {
    const baseUrl = "https://jsonplaceholder.typicode.com";

    beforeEach(function() {
      cy.task('logMessage', `START TEST: ${this.currentTest.title}`);
    });
    
    afterEach(function() {
      cy.task('logMessage', `END TEST: ${this.currentTest.title} - Status: ${this.currentTest.state}`);
    });
  
    it("GET /posts should return a list of posts", () => {
      cy.request("GET", `${baseUrl}/posts`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");
        expect(response.body.length).to.be.greaterThan(0);
        cy.task('logAPIResponse', `API Response: ${JSON.stringify(response.body)}`);
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
        cy.task('logAPIResponse', `API Response: ${JSON.stringify(response.body)}`);
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
        cy.task('logAPIResponse', `API Response: ${JSON.stringify(response.body)}`);
      });
    });
  
    it("DELETE /posts/1 should delete a post", () => {
      cy.request("DELETE", `${baseUrl}/posts/1`).then((response) => {
        expect(response.status).to.eq(200);
        cy.task('logAPIResponse', `API Response: ${JSON.stringify(response.body)}`);
      });
    });
  });
  