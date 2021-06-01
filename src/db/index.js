const { Client } = require('pg');

/**
 * Creates a new PostgreSQL client based on the values in the .env file.
 */
const client = new Client({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

client.connect();

// language=sql
client.query(`

    --Main Tables

    create table if not exists seller
    (
        seller_id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name text not null
    );

    create table if not exists manufacturer
    (
        manufacturer_id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name text not null
    );

    create table if not exists categories
    (
        category_id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name text not null,
        parent_id int,
        foreign key (parent_id) references categories (category_id)
    );

    create table if not exists expenses
    (
        expense_id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name text not null,
        price DECIMAL(10,2),
        date timestamptz not null default now(),
        
        manufacturer_id int not null,
        seller_id int not null,
        foreign key (manufacturer_id) references manufacturer (manufacturer_id),
        foreign key (seller_id) references seller (seller_id)
        
    );


    --Junction Tables 

    create table if not exists junction_expense_category
    (
        expense_id int references expenses (expense_id) not null,
        category_id int references categories (category_id) not null
    );


`);

module.exports = client;
