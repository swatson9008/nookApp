const Listing = require('../models/listings');

// Display list of all listings
exports.listingList = async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
};

// Display detail page for a specific listing
exports.listingDetail = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id)
      .populate('furniture')
      .populate('category');

    if (!listing) {
      return res.status(404).send('Listing not found');
    }
    res.json(listing);
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
};

// Handle listing create on POST
exports.listingCreate = async (req, res) => {
  const { furniture, category, available } = req.body;
  const listing = new Listing({ furniture, category, available });

  try {
    const savedListing = await listing.save();
    res.json(savedListing);
  } catch (err) {
    res.status(400).send('Bad Request');
  }
};

// Handle listing delete on DELETE
exports.listingDelete = async (req, res) => {
  try {
    await Listing.findByIdAndRemove(req.params.id);
    res.json({ message: 'Listing deleted successfully' });
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
};

// Handle listing update on PUT
exports.listingUpdate = async (req, res) => {
  const { furniture, category, available } = req.body;

  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      { furniture, category, available },
      { new: true } // Return the updated document
    );
    res.json(updatedListing);
  } catch (err) {
    res.status(400).send('Bad Request');
  }
};
