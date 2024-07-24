
import 'cypress-plugin-api';

describe('Usuario API', () => {
  const username = 'renzoserra';
  const updatedEmail = 'renzo_updated@gmail.com';
  const updatedFirstName = 'RenzoUpdated';
  const usernameFake = 'renzoserrax';
  const url = 'https://petstore.swagger.io/v2/user/';

  it('Crear usuario', () => {
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

  it('Buscar usuario creado', () => {
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

  it('Actualizar nombre y correo del usuario', () => {
    cy.api({
      method: 'PUT',
      url: `${url}${username}`,
      body: {
        id: 999,
        username: username,
        firstName: updatedFirstName,
        lastName: 'Serra',
        email: updatedEmail,
        password: '12345',
        phone: '123456789',
        userStatus: 1
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Buscar usuario actualizado', () => {
    cy.api({
      method: 'GET',
      url: `${url}${username}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 999);
      expect(response.body).to.have.property('username', username);
      expect(response.body).to.have.property('firstName', updatedFirstName);
      expect(response.body).to.have.property('lastName', 'Serra');
      expect(response.body).to.have.property('email', updatedEmail);
      expect(response.body).to.have.property('password', '12345');
      expect(response.body).to.have.property('phone', '123456789');
      expect(response.body).to.have.property('userStatus', 1);
    });
  });

  it('Eliminar usuario', () => {
    cy.api({
      method: 'DELETE',
      url: `${url}${username}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', username);
    });
  });

  it('Buscar usuario eliminado', () => {
    cy.api({
      method: 'GET',
      url: `${url}${username}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.have.property('message', 'User not found');
    });
  });

  it('Buscar usuario con nombre de usuario inválido', () => {
    cy.api({
      method: 'GET',
      url: `${url}${usernameFake}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.have.property('message', 'User not found');
    });
  });

  it('Actualizar usuario inexistente', () => {
    cy.api({
      method: 'PUT',
      url: `${url}${usernameFake}`,
      failOnStatusCode: false,
      body: {
        id: 999,
        username: usernameFake,
        firstName: updatedFirstName,
        lastName: 'Serra',
        email: updatedEmail,
        password: '12345',
        phone: '123456789',
        userStatus: 1
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
