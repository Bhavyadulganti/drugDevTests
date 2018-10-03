const url = 'http://sprinkle-burn.glitch.me'

given("the user has the correct credentials", () => {
  cy.visit(url)
});

when("the user enters username {string}", (username) => {
  cy.get('#login-form > fieldset > div:nth-child(2) > input').type(username)
  //throw new Error("Not implemented");
});

then("the user enters password {string}", (password) => {
  cy.get('#login-form > fieldset > div:nth-child(3) > input').type(password)
});

then("clicks Login", () => {
  cy.get('#login-form > fieldset > div.flex > button').click()
});

then("the user is presented with a welcome message", () => {
  cy.get('body > article').contains('Welcome Dr I Test')
});

given("the user has the incorrect credentials", () => {
  cy.visit(url)
});

then("the user is presented with a error message", () => {
  cy.get('#login-error-box').contains("Credentials are incorrect")
});

