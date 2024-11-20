import { faker } from "@faker-js/faker";

export const generateUser = () => {
  return {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: "coder123",
    role: Math.random() < 0.25 ? "admin" : "user",
    pets: [],
  };
};

export const generateRandomPet = () => {
  return {
    name: faker.animal.petName(),
    specie: faker.animal.type(),
    birthDate: faker.date.birthdate(),
  };
};
