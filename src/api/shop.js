const _product=[
  {
    "id": 1,
    "title": "ipad 4 Mini",
    "price": 500,
    "inventory": 2
  },
  { "id": 2, "title": "H&M T-Shirt White", "price": 70.99, "inventory": 10 },
  { "id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5 }
]

export default {
  getProducts(cb){
    setTimeout(()=>{
      cb(_product)
    },500)
  }
}