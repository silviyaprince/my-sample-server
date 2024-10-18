const express = require('express')
const app = express()
const PORT=4000
const products=[
    {
        id:1,
      name: "iphone 15 pro max",
      price: "1,45,000",
      poster: "https://m.media-amazon.com/images/I/81+GIkwqLIL._SX679_.jpg",
      category: "Electronics",
      rating: 7,
      description:
        "iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.",
        trailer:"https://www.youtube.com/embed/xqyUdNxWazA?si=EDls807C2noHLuLm"
    },
    {
        id:2,
      name: "Sony Digital Camera ZV-1 ",
      price: "49,990",
      poster: "https://m.media-amazon.com/images/I/71q04J8-9YL._SL1500_.jpg",
      category: "Electronics",
      rating: 7.5,
      description:
        "20.1 MP stacked back illuminated 1 Exmor RS CMOS sensor / DRAM, Large aperture 24-70mm 1 F1.8-2.8 ZEISS Vario-Sonnar T lens;Directional 3-capsule inbuilt-mic with wind screen",
        trailer:"https://www.youtube.com/embed/tkweChULkrI?si=Or9VVjANVJj0uqrx"
    },
    {
        id:3,
      name: "Invicta Stainless Steel Specialty Chronograph Black Dial Analog Watch  ",
      price: "12,800",
      poster: "https://m.media-amazon.com/images/I/71xeDqb5BQL._SL1500_.jpg",
      category: "Electronics",
      rating: 7.5,
      description:
        "This model is powered by an accurate Quartz movement, 5 bar water pressure resistance",
        trailer:"https://www.youtube.com/embed/DRA3KWqGnlA?si=vfBkdJVoJeszO6fM"
    },
    {
        id:4,
      name: "Titan Edge Analog Black Dial Men's Watch  ",
      price: "12,435",
      poster: "https://m.media-amazon.com/images/I/41yMYFf-prL._SX679_.jpg",
      category: "Electronics",
      rating: 7.5,
      description:
        "Dial Color: Black, Case Shape: RectangularBand Color: Black, Band Material: Leather",
        trailer:"https://www.youtube.com/embed/-UvK5aRpuak?si=bp3OjQRqSvnbIOOc"
    },
  ];
  
app.get('/',  (req, res)=> {
  res.send('Hello World hi all')
})


app.get('/products',  (req, res)=> {
    res.send(products)
  })

  app.get('/products',  (req, res)=> {
    const {category}=req.query
    console.log(req.query,category)
    const product=products.filter((pd)=>pd.category==category)
    res.send(product)
  })

  app.get('/products/:id',  (req, res)=> {
    const {id}=req.params
    console.log(req.params,id)
    const product=products.find((pd)=>pd.id==id)
    res.send(product)
  })

app.listen(PORT,()=>console.log("server started on port",PORT))