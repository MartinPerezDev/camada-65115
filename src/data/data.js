const products = [
  {
    id: "Dss122",
    name: "Remera roja",
    description: "",
    price: 200,
    stock: 10,
    image: "/img/remera-roja.webp",
    category: "remeras"
  },
  {
    id: "Gerr222",
    name: "Gorra nike",
    description: "",
    price: 500,
    stock: 2,
    image: "/img/gorra.jpeg",
    category: "gorras"
  },
  {
    id: "Htt222",
    name: "Zapatillas verdes",
    description: "",
    price: 700,
    stock: 1,
    image: "/img/zapatillas.jpeg",
    category: "zapatillas"
  }
]

const getProducts = () => {
  return new Promise( (resolve, reject)=> {
    setTimeout( ()=>{
      resolve(products)
    }, 2000 )
  } )
}

export { getProducts }