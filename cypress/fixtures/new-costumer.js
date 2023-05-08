import {faker }from "@faker-js/faker";
module.exports={

    id:faker.random.numeric(),
    first_name: faker.name.firstName(),
    second_name: faker.name.firstName(),
    surname: faker.name.lastName(),
    address: faker.address.street(),
    email: faker.internet.email(),
}