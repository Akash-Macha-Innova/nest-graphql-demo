import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';

@Injectable()
export class PetsService {
    constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>) {}

    async findAll(): Promise<Pet[]> {

        return this.petsRepository.find(); // SELECT * FROM pet

        // const pet = new Pet();
        // pet.id = 1;
        // pet.name = 'Mambo';

        // return [pet];
    }

    async createPet(createPetInput: CreatePetInput): Promise<Pet> {
        const newPet = this.petsRepository.create(createPetInput);
        return this.petsRepository.save(newPet); // insert into db!
    }
}
