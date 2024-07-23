import 'cypress-plugin-api';

describe('Crear usuario', () => {
  it('Debería crear un usuario y validar la respuesta', () => {
    cy.api({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user',
      body: {
        id: 999,
        username: 'renzoserra',
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
      expect(response.body).to.have.property('type', 'unknown');
      expect(response.body).to.have.property('message');
    });
  });
});
