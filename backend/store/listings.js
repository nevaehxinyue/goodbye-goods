const listings = [
 
  {
    id: 3,
    title: "Beige couch in a great condition",
    images: [{ fileName: "couch2" }],
    categoryId: 1,
    price: 800,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  
    {
      id: 1,
      title: "Room & Board couch (great condition) - delivery included",
      description:
        "I'm selling my furniture at a discount price. Pick up at Venice. DM me asap.",
      images: [
        { fileName: "couch1" },
        { fileName: "couch3" },
      ],
      price: 1000,
      categoryId: 1,
      userId: 1,
      location: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    },
    {
      id: 201,
      title: "Denim jacket",
      images: [{ fileName: "jacket" }],
      price: 100,
      categoryId: 5,
      userId: 1,
      location: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    },
    {
      id: 2,
      title: "Designer wear shoes",
      images: [{ fileName: "shoes2" }],
      categoryId: 5,
      price: 100,
      userId: 2,
      location: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    },
    {
      id: 102,
      title: "Canon 400D (Great Condition)",
      images: [{ fileName: "camera1" }],
      price: 300,
      categoryId: 3,
      userId: 3,
      location: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    },
    {
      id: 6,
      title: "Brown leather shoes",
      images: [{ fileName: "shoes1" }],
      categoryId: 5,
      price: 50,
      userId: 3,
      location: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    },
  ];
  
  const addListing = (listing) => {
    listing.id = listings.length + 1;
    listings.push(listing);
  };
  
  const getListings = () => listings;
  
  const getListing = (id) => listings.find((listing) => listing.id === id);
  
  const getListingsByUserId = (userId) => listings.filter((listing) => listing.userId === userId);
  
  module.exports = {
    addListing,
    getListings,
    getListing,
    getListingsByUserId
  };
  