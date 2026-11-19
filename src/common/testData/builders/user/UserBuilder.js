import { faker } from '@faker-js/faker';
import { BaseBuilder } from '../BaseBuilder';

export class User {
  constructor() {
    this.username = null;
    this.email = null;
    this.password = null;
    this.token = null;
  }
}

export class UserBuilder extends BaseBuilder {
  reset() {
    this.product = new User();
  }

  setUsername(username = null) {
    this.product.username = username ?? this.generateUsername();
  }

  setEmail(email = null) {
    this.product.email = email ?? this.generateEmail();
  }

  setPassword(password = null) {
    this.product.password = password ?? this.generatePassword();
  }

  setToken(token) {
    this.product.token = token;
  }

  generateUsername() {
    const suffix = faker.string.alphanumeric({ length: 10, casing: 'lower' });

    return `user${suffix}`;
  }

  generateEmail() {
    return `${this.product.username}@example.com`;
  }

  generatePassword() {
    return faker.internet.password();
  }
}
