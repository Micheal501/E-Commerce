import axios from 'axios';

function getProducts(callback) {
  axios
    .get('https://api.escuelajs.co/api/v1/products')
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default getProducts;
