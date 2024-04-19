"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://shaikfayazuddin18:mks61vEbeScG@ep-bold-bird-72035101.us-east-2.aws.neon.tech/SQL_Intro?sslmode=require"
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
    CREATE TABLE students (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`);
        console.log(result);
    });
}
createUsersTable();
function createAddressTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield client.query(`
        CREATE TABLE address(
            id  SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(50) NOT NULL,
            country VARCHAR(50) NOT NULL,
            pincode VARCHAR(50) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES students(id) ON DELETE CASCADE
        )`);
        console.log(result);
    });
}
createAddressTable();
/*
async function insertData(){
    // await client.connect()
    const insertQuery = `INSERT INTO students(username, email, password)
    VALUES (shaikfayazuddin, shaikfayazuddin@gmail.com, hello123)`
    const res = await client.query(insertQuery)

    console.log('Insertion Success:',res)
    await client.end()
}
insertData()
*/
//this is to create a new user
/*
async function insertData(username:string,email:string,password:string){
    // await client.connect()
    try{
        const insertQuery = "INSERT INTO students(username, email, password) VALUES ($1,$2,$3)"
        const values = [username, email, password]
        const res = await client.query(insertQuery,values)
        console.log("Insertion success:", res)
    } catch(err){
        console.log("Insertion failed:", err)
    }finally{
        await client.end()
    }
}

insertData('user5','user5@gmail.com', 'hellouser').catch(console.error)
*/
//to read data from db
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = 'SELECT * FROM students WHERE email = $1';
            const values = [email];
            const res = yield client.query(query, values);
            if (res.rows.length > 0) {
                console.log("User Found:", res.rows[0]);
                return res.rows[0];
            }
            else {
                console.log("No user found with the given email");
                return null;
            }
        }
        catch (err) {
            console.log("Error during fetching data", err);
            throw err;
        }
        finally {
            yield client.end();
        }
    });
}
getUser('user@gmail.com').catch(console.error);
//now writing logic to add both the student and address data in a single request and this requrires transaction to make sure either all the data goes or nothing
function insertStudentAndAddress(username, email, password, city, country, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.query('BEGIN');
            const studentData = `INSERT INTO students(username, email, password) 
        VALUES ($1, $2, $3)
        RETURNING id`;
            const studentValues = [username, email, password];
            const userRes = yield client.query(studentData, studentValues);
            const userId = userRes.rows[0].id;
            console.log("Student data added", userRes);
            const addressData = `INSERT INTO address(user_id, city, country, pincode)
        VALUES ($1, $2, $3, $4)`;
            const addressValues = [userId, city, country, pincode];
            const addressRes = yield client.query(addressData, addressValues);
            console.log("Address added", addressRes);
            yield client.query("COMMIT");
            console.log("User and Address added successfully");
        }
        catch (err) {
            yield client.query("ROLLBACK");
            console.log("Error during insertion, rolled back", err);
            throw err;
        }
        finally {
            yield client.end();
        }
    });
}
insertStudentAndAddress('user6', 'user6@gmail.com', 'user6Password', 'delhi', 'india', '520001');
