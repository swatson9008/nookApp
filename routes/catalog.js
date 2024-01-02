const express = require("express");
const router = express.Router();

// Require controller modules.
const category_controller = require("../controllers/categoryController");
const furniture_controller = require("../controllers/furnitureController");
const listing_controller = require("../controllers/listingController");

/// Furniture ROUTES ///

// GET catalog home page.
router.get("/", furniture_controller.index);

// GET request for creating Furniture. NOTE: This must come before routes that display Furniture (uses id).
router.get("/furniture/create", furniture_controller.furniture_create_get);

// POST request for creating Furniture.
router.post("/furniture/create", furniture_controller.furniture_create_post);

// GET request to delete Furniture.
router.get("/furniture/:id/delete", furniture_controller.furniture_delete_get);

// POST request to delete Furniture.
router.post("/furniture/:id/delete", furniture_controller.furniture_delete_post);

// GET request to update Furniture.
router.get("/furniture/:id/update", furniture_controller.furniture_update_get);

// POST request to update Furniture.
router.post("/furniture/:id/update", furniture_controller.furniture_update_post);

// GET request for one Furniture.
router.get("/furniture/:id", furniture_controller.furniture_detail);

// GET request for list of all Furniture items.
router.get("/furniture", furniture_controller.furniture_list);

/// Category ROUTES ///

// GET request for creating Category. NOTE: This must come before route for id (i.e. display category).
router.get("/category/create", category_controller.category_create_get);

// POST request for creating Category.
router.post("/category/create", category_controller.category_create_post);

// GET request to delete Category.
router.get("/category/:id/delete", category_controller.category_delete_get);

// POST request to delete Category.
router.post("/category/:id/delete", category_controller.category_delete_post);

// GET request to update Category.
router.get("/category/:id/update", category_controller.category_update_get);

// POST request to update Category.
router.post("/category/:id/update", category_controller.category_update_post);

// GET request for one Category.
router.get("/category/:id", category_controller.category_detail);

// GET request for list of all Categories.
router.get("/categories", category_controller.category_list);

/// Listing ROUTES ///

// GET request for creating a Listing. NOTE: This must come before route that displays Listing (uses id).
router.get("/listing/create", listing_controller.listing_create_get);

// POST request for creating Listing.
router.post("/listing/create", listing_controller.listing_create_post);

// GET request to delete Listing.
router.get("/listing/:id/delete", listing_controller.listing_delete_get);

// POST request to delete Listing.
router.post("/listing/:id/delete", listing_controller.listing_delete_post);

// GET request to update Listing.
router.get("/listing/:id/update", listing_controller.listing_update_get);

// POST request to update Listing.
router.post("/listing/:id/update", listing_controller.listing_update_post);

// GET request for one Listing.
router.get("/listing/:id", listing_controller.listing_detail);

// GET request for list of all Listings.
router.get("/listings", listing_controller.listing_list);

module.exports = router;
