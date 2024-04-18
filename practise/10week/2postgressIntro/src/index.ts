import { Client, Connection } from "pg";

const client = new Client({
    connectionString : "postgresql://shaikfayazuddin18:mks61vEbeScG@ep-bold-bird-72035101.us-east-2.aws.neon.tech/SQL_Intro?sslmode=require"
})


async function createUsersTable(){
    await client.connect()
    const result = await client.query(`
    CREATE TABLE students (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`)
    console.log(result)
}

createUsersTable()


async function insertData(){
    // await client.connect()
    const insertQuery = `INSERT INTO students(username, email, password)
    VALUES (shaikfayazuddin, shaikfayazuddin@gmail.com, hello123)`
    const res = await client.query(insertQuery)

    console.log('Insertion Success:',res)
    await client.end()
}

insertData()