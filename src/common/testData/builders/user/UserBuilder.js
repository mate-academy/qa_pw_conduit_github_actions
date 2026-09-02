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

  generateFirstName() {
    return faker.person.firstName();
  }

  generateLastName() {
    return faker.person.lastName();
  }

  generateUsername() {
    return `${this.generateFirstName()}_${this.generateLastName()}`
      .replace(/[^a-zA-Z0-9_]/g, '')
      .toLowerCase();
  }

  generateEmail() {
    return `${this.product.username}_${faker.internet.email()}`.toLowerCase();
  }

  generatePassword() {
    return faker.internet.password();
  }
}
