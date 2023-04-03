// Sample JSON data for product and offerings
const productData = {
    "product": {
      "id": "12345",
      "name": "Wireless Bluetooth Headphones",
      "description": "Experience high-quality sound and comfort with our Wireless Bluetooth Headphones. Enjoy up to 20 hours of playtime on a single charge.",
      "image_url": "https://example.com/images/headphones.jpg",
      "price": 79.99,
      "currency": "USD",
      "category": ["Electronics", "Audio", "Headphones"],
      "tags": ["wireless", "bluetooth", "noise-cancelling"]
    }
  };
  
  const offeringsData = {
    "offerings": [
      {
        "id": "offer-1",
        "user_id": "user123",
        "description": "Offering 200 DOGE for the headphones",
        "currency": "DOGE",
        "amount": 200
      },
      {
        "id": "offer-2",
        "user_id": "user456",
        "description": "Will exchange 1 ETH and 5 Hi-Fives for the headphones",
        "currency": "multi",
        "offerings": [
          {
            "currency": "ETH",
            "amount": 1,
            "temp_address": "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
          },
          {
            "currency": "Hi-Fives",
            "amount": 5
          }
        ]
      }
    ]
  };
  
  // Function to parse the product data
  function parseProductData(data) {
    const product = data.product;
    console.log("Product Details:");
    console.log(`ID: ${product.id}`);
    console.log(`Name: ${product.name}`);
    console.log(`Description: ${product.description}`);
    console.log(`Image URL: ${product.image_url}`);
    console.log(`Price: ${product.price} ${product.currency}`);
    console.log(`Category: ${product.category.join(', ')}`);
    console.log(`Tags: ${product.tags.join(', ')}`);
  }
  
  // Function to parse the offerings data
  function parseOfferingsData(data) {
    const offerings = data.offerings;
    console.log("\nOfferings:");
    offerings.forEach(offer => {
      console.log(`\nOffer ID: ${offer.id}`);
      console.log(`User ID: ${offer.user_id}`);
      console.log(`Description: ${offer.description}`);
      if (offer.currency === "multi") {
        offer.offerings.forEach(subOffer => {
          console.log(`Currency: ${subOffer.currency}`);
          console.log(`Amount: ${subOffer.amount}`);
          if (subOffer.temp_address) {
            console.log(`Temp Address: ${subOffer.temp_address}`);
          }
        });
      } else {
        console.log(`Currency: ${offer.currency}`);
        console.log(`Amount: ${offer.amount}`);
      }
    });
  }
  
  // Parse and display the data
  parseProductData(productData);
  parseOfferingsData(offeringsData);
  