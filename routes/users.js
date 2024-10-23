import express from "express";
const router = express.Router();
import { genPassword ,createUser,getUserByName} from "../helpers.js";
router.post("/signup", async (req, res) => {
    const {username,password} = req.body;
  const isUserExist=await getUserByName(username)
  if(isUserExist){
    res.status(400).send({message:"username already exists"})
    return
  }
  if(!/^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[()]).{8,}$/g.test(password)){
    res.status(400).send({message:"password pattern doesnt match"})
        return
    
  }
    const hashedPassword = await genPassword(password);
  const result=await createUser(username,hashedPassword)
    res.send(result);
  });

  export const usersRouter = router;