import express from "express";
import { faker } from "@faker-js/faker";

const app = express();
const port = 5000;

const createUser = () => {
    const newUser = {
        password : faker.internet.password(),
        email : faker.internet.email(),
        phoneNumber : faker.phone.number(),
        lastName : faker.name.lastName(),
        firstName : faker.name.firstName(),
        _id : faker.random.numeric(5)
    };
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        _id : faker.random.numeric(3),
        name : faker.company.name(),
        address : {
            street : faker.address.street(),
            city : faker.address.city(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            county : faker.address.country()
        }
    };
    return newCompany;
}

app.get("/api/companies/new", (req, res) => {
    const company = createCompany()
    res.json( company);
});

app.get("/api/users/new", (req, res) => {
    const user = createUser()
    res.json( user );
});

app.get("/api/user/company", (req, res) => {
    const user = createUser()
    const company = createCompany()
    res.json({
        company,
        user    
    });
});



app.listen( port, () => console.log(`listening on port: ${port}`) );
