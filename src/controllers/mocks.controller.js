import { generateRandomPet, generateUser } from "../utils/faker.js";
import PetDTO from "../dto/Pet.dto.js";
import UserDTO from "../dto/User.dto.js";
import { petsService } from "../services/index.js";
import { usersService } from "../services/index.js";
import { logger } from "../utils/logger.js";

export const mockPets = async (req, res) => {
  let result = [];
  for (let i = 0; i < 50; i++) {
    result.push(generateUser());
  }

  res.send({ status: "success", payload: result });
};

export const generateMockData = async (req, res) => {
  const numUsers = req.body.numUsers;
  const numPets = req.body.numPets;

  let fakePet;
  let name;
  let specie;
  let birthDate;

  for (let i = 0; i < numPets; i++) {
    let { name, specie, birthDate } = generateRandomPet();

    let pet = PetDTO.getPetInputFrom({ name, specie, birthDate });
    let result = await petsService.create(pet);
  }

  for (let i = 0; i < numUsers; i++) {
    let { first_name, last_name, email, password, role, pets } = generateUser();

    let result = await usersService.create({
      first_name,
      last_name,
      email,
      password,
      role,
      pets,
    });
  }

  res.send({
    status: "success",
    payload:
      "Datos generados exitosamente. " +
      numPets +
      " mascotas creadas. " +
      numUsers +
      " usuarios creados",
  });
};
