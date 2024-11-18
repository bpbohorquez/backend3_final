import { generateRandomPet, generateUser } from "../utils/faker.js";
import PetDTO from "../dto/Pet.dto.js";
import { petsService } from "../services/index.js";

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
    fakePet = generateRandomPet();
    name = fakePet.name;
    specie = fakePet.specie;
    birthDate = fakePet.birthDate;

    let pet = PetDTO.getPetInputFrom({ name, specie, birthDate });
    let result = await petsService.create(pet);
  }

  for (let i = 0; i < numUsers; i++) {
    fakePet = generateRandomPet();
    name = fakePet.name;
    specie = fakePet.specie;
    birthDate = fakePet.birthDate;

    let pet = PetDTO.getPetInputFrom({ name, specie, birthDate });
    let result = await petsService.create(pet);
  }

  res.send({ status: "success", payload: "Datos generados exitosamente" });
};
