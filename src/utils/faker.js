import { faker } from "@faker-js/faker";

export const generateUser = () => {
  return {
    name: faker.person.firstName() + faker.person.lastName(),
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
