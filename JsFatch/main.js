const getData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  resultData(data);
};

const resultData = (value) => {
  console.log(value);
  console.log(value[0].title, value[0].price);
};

getData();
