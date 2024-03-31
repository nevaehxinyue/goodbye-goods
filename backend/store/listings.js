const listings = [
  
    {
      id: 1,
      title: "Room & Board couch (great condition) - delivery included",
      description:
        "I'm selling my furniture at a discount price. Pick up at Venice. DM me asap.",
      images: [
        { fileName: "couch1" },
        { fileName: "couch2" },
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
      id: 2,
      title: "Designer wear shoes",
      images: [{ fileName: "shoes1" }],
      categoryId: 5,
      price: 100,
      userId: 2,
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
  
  const filterListings = (predicate) => listings.filter(predicate);
  
  module.exports = {
    addListing,
    getListings,
    getListing,
    filterListings,
  };
  