const WooCommerceAPI = require('woocommerce-api');

const WooCommerce = new WooCommerceAPI({
  url: 'https://yourstore.com', // Replace with your store URL
  consumerKey: 'ck_your_key', // Replace with your consumer key
  consumerSecret: 'cs_your_secret', // Replace with your consumer secret
  wpAPI: true,
  version: 'wc/v3',
});

function getProductsWithOfferingTag() {
  return new Promise((resolve, reject) => {
    WooCommerce.get('products', { tag: '_offering_' }, (err, data, res) => {
      if (err) {
        reject(err);
      } else {
        const products = JSON.parse(res);
        const productsWithIPFSLinks = products.map(product => {
          const ipfsTag = product.tags.find(tag => tag.name.startsWith('ipfs:'));
          const ipfsLink = ipfsTag ? ipfsTag.name.slice(5) : null;
          return { ...product, ipfsLink };
        });
        resolve(productsWithIPFSLinks);
      }
    });
  });
}

module.exports = {
  getProductsWithOfferingTag,
};
