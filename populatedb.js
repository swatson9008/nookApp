#! /usr/bin/env node

console.log(
  'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Furniture = require("./models/furniture");
const Category = require("./models/category");
const Listing = require("./models/listing")

const furnitureC = [];
const categories = [];
const listings = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = "mongodb+srv://summerleawatson:fpb9bTJqEu1FpKiq@cluster0.c1tbitt.mongodb.net/nookApp?retryWrites=true&w=majority";

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(mongoDB);
    console.log("Connected to the database");
    await createData();
  } catch (error) {
    console.error("Error connecting to the database:", error);
  } finally {
    // Close the connection after creating data
    mongoose.connection.close();
    console.log("Connection closed");
  }
}

async function createCategories(index, name) {
  const category = new Category({ name: name });
  await category.save();
  categories[index] = category;
  console.log(`Added genre: ${name}`);
}

async function createFurniture(index, name, amount, price) {
  const formattedPrice = `$ ${price.toFixed(2)}`;
  const furnituredetail = { index, name, amount, formattedPrice };

  const furniture = new Furniture(furnituredetail);

  await furniture.save();
  furnitureC[index] = furniture;
  console.log(`Added furniture: ${name}`);
}

async function createListings(furniture, category, available) {
  const listingdetail = { furniture, category, available };
  const listing = new Listing(listingdetail);
  await listing.save();
  listings[index] = listing;
  console.log(`Added listing: ${furniture}`);
}


async function createCategories() {
  console.log("Adding categories");
  await Promise.all([
    categoryCreate(0, "Living Room"),
    categoryCreate(1, "Kitchen"),
    categoryCreate(2, "Outdoor"),
  ]);
}

async function createFurniture() {
  console.log("Adding furnitures");
  await Promise.all([
    createFurniture(0, "Glass-top table", 20,`$ ${200}`),
    createFurniture(1, "Bonsai", 30,`$ ${20}`),
    createFurniture(2, "Toaster", 10,`$ ${30}`),
    createFurniture(3, "Flamingo", 15,`$ ${10}`),
  ]);
}

// ...

async function createListings() {
  console.log("Adding Listings");
  await Promise.all([
    createListings(furnitureC[0], categories[0], true),
    createListings(furnitureC[1], categories[1], true),
    createListings(furnitureC[2], categories[2], true),
    createListings(furnitureC[3], categories[0], true),
  ]);
}

async function createData() {
  await createCategories();
  await createFurniture();
  await createListings();
}

// ...


