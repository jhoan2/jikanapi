/* eslint-disable no-undef */
describe("Listing Animes", () => {
  it("shows animes from the server", () => {
    const naruto = "Naruto";
    const narutoShippuden = "Naruto: Shippuuden";
    cy.server({ force404: true });

    cy.route({
      method: "GET",
      url: "https://api.jikan.moe/v3/search/anime?q=Naruto",
      response: {
        results: [
          { mal_id: 20, title: naruto },
          { mal_id: 1735, title: narutoShippuden },
        ],
      },
    });

    cy.visit("/");
    cy.contains(naruto);
    cy.contains(narutoShippuden);
  });
});
