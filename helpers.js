import bcrypt from "bcrypt";
import {client} from "./index.js";
 async function getAllProducts(req) {
    return await client
      .db("my-react-db")
      .collection("products")
      .find(req.query).toArray();
  }
  
  async function addProducts(newProduct) {
    return await client
      .db("my-react-db")
      .collection("products")
      .insertMany(newProduct);
  }
  
  async function getProductById(id) {
    return await client
      .db("my-react-db")
      .collection("products")
      .findOne({ id: id });
  }
  
  async function deleteProductById(id) {
    return await client
      .db("my-react-db")
      .collection("products")
      .deleteOne({ id: id });
  }

  async function updateProductById(id,updateProduct) {
    return await client
      .db("my-react-db")
      .collection("products")
      .updateOne({ id: id },{$set:updateProduct});
  }

  async function genPassword(password){
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt);
    return hashedPassword;
  }

  async function createUser(username,hashedPassword){
    return await client.db("my-react-db").collection("users").insertOne({username:username,password:hashedPassword})
    
  }

  async function getUserByName(username){
    return await client.db("my-react-db").collection("users").findOne({username:username})
    
  }
export {getAllProducts,getProductById,deleteProductById,addProducts,updateProductById,genPassword,createUser,getUserByName}