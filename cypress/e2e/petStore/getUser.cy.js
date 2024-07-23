import 'cypress-plugin-api';

describe('Buscar usuario', () => {
  const username = 'renzoserra';
  const usernameFake = 'renzoserrax';
  const url = 'https://petstore.swagger.io/v2/user/';

  before(() => {
    cy.api({
      method: 'POST',
      url: url,
      body: {
        id: 999,
        username: username,
        firstName: 'Renzo',
        lastName: 'Serra',
        email: 'renzo@gmail.com',
        password: '12345',
        phone: '123456789',
        userStatus: 1
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.code).to.eq(200);
    });
  });

  it('Debería buscar el usuario creado y validar la respuesta', () => {
    cy.api({
      method: 'GET',
      url: `${url}${username}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 999);
      expect(response.body).to.have.property('username', username);
      expect(response.body).to.have.property('firstName', 'Renzo');
      expect(response.body).to.have.property('lastName', 'Serra');
      expect(response.body).to.have.property('email', 'renzo@gmail.com');
      expect(response.body).to.have.property('password', '12345');
      expect(response.body).to.have.property('phone', '123456789');
      expect(response.body).to.have.property('userStatus', 1);
    });
  });

  it('Debería devolver 404 si el usuario no existe', () => {
    cy.api({
      method: 'GET',
      url: `${url}${usernameFake}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
