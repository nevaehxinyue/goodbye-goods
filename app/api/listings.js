import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const addListing = (listing) => {
  // console.log(listing)
  const data = new FormData(); //By default the content-type is multipart/form-data for FormData

  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, index) => {
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    });
  });

  if (listing.location) {
    data.append("location", JSON.stringify(listing.location));
  }

  console.log(data);

  return client.post(endpoint, data, {
    headers: { "Content-Type": "multipart/form-data" },
    // onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addListing,
  getListings,
};
