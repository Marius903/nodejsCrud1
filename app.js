const {products, someText } = require("./data.js");

// suinstalliuoti express  --> npm install <package-name>
// suinstalliuoti nodemon
// suinstalliuoti vietini serveri

const express = require("express");
const app = express();
const PORT = 5050;

app.use(express.json());

//GET --> gaunam prodcuts list
app.get("/products", (request, response) => {
    response.send(products);
});

//metodas GET --> gaunam products list
app.get("/jonas/:id", (req, res) => {
    // const filteredProduct[0]
    const oneProduct = products.find(el=>el.id === parseInt(req.params.id))

    if(!oneProduct){
        res.status(404).send("Produkto tokiu ID nera");
    }

    res.send(oneProduct);
});

//metodas POST --> sukuriu ir irasau naujus duomenis i masyva products
app.post("/products", (req, res)=>{
    const newProduct={
        id: products.length + 1,
        title: req.body.title,
    };

    products.push(newProduct);
    res.send(products);
});

///////// NO CODE BELLOW THISD LINE
///______________________
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port.`);

});
