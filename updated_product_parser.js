const fs = require('fs');

const jsonData = fs.readFileSync('ox.json', 'utf-8');
const data = JSON.parse(jsonData);

// Display product information
console.log('Product Information:');
console.log(`ID: ${data.product.id}`);
console.log(`Name: ${data.product.name}`);
console.log(`Description: ${data.product.description}`);
console.log(`Image URL: ${data.product.image_url}`);
console.log(`Price: ${data.product.price} ${data.product.currency}`);
console.log(`Category: ${data.product.category.join(' > ')}`);
console.log(`Tags: ${data.product.tags.join(', ')}`);
console.log('\n');

// Display buyout information
console.log('Buyout Information:');
console.log(`Price: ${data.buyout.price} ${data.buyout.currency}`);
console.log(`Contract Address: ${data.buyout.contract_address}`);
console.log('\n');

// Display active offerings
console.log('Active Offerings:');
data.offerings.forEach((offering, index) => {
  console.log(`Offering ${index + 1}:`);
  console.log(`ID: ${offering.id}`);
  console.log(`User ID: ${offering.user_id}`);
  console.log(`Description: ${offering.description}`);
  
  if (offering.currency === 'multi') {
    offering.offerings.forEach((subOffering, subIndex) => {
      console.log(`  Sub-offering ${subIndex + 1}:`);
      console.log(`  Currency: ${subOffering.currency}`);
      console.log(`  Amount: ${subOffering.amount}`);
      if (subOffering.temp_address) {
        console.log(`  Temp Address: ${subOffering.temp_address}`);
      }
    });
  } else {
    console.log(`Currency: ${offering.currency}`);
    console.log(`Amount: ${offering.amount}`);
  }
  console.log('\n');
});
