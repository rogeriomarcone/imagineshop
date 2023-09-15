import "dotenv/config";
import express from "express";
import UserService from "./services/user.service.js";
import authMiddleware from "./middlewares/auth.middlewares.js";

const app = express();
const port = 3000;

app.use(express.json());
//app.use(authMiddleware);

app.get("/", (req, res) => {
  res.send("ImagineShop API");
});

// LOGIN

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userService = new UserService();
  try {
    const token = await userService.login(email, password);
    return res.status(200).json({ access_token: token });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// C - CREAT

app.post("/users", authMiddleware, async (req, res) => {
  const { name, email, password } = req.body;
  const userService = new UserService();
  await userService.add(name, email, password);
  return res.status(201).json({ message: "sucess" });
});

// R - READ

app.get("/users", authMiddleware, async (req, res) => {
  const userService = new UserService();
  const users = await userService.findAll();
  return res.status(200).json(users);
});

app.get("/users/:id", authMiddleware, async (req, res) => {
  const id = req.params.id;
  const userService = new UserService();
  const user = await userService.findById(id);
  return res.status(200).json(user);
});

// U - UPDATE

app.put("/users/:id", authMiddleware, async (req, res) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  const user = { name, email, password };
  const userService = new UserService();
  try {
    await userService.update(id, user);
    return res.status(200).json({ message: "sucess" });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});

// D - DELETE

app.delete("/users/:id", authMiddleware, async (req, res) => {
  const id = req.params.id;
  const userService = new UserService();
  try {
    await userService.delete(id);
    return res.status(200).json({ message: "sucess" });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server runnting at http://localhost:${port}`);
});



// C - CREAT
/*
app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;
  const userService = new UserService();
  await userService.add(name, email, password);
  return res.status(201).json({ message: "sucess" });
});
*/
/*
app.post("/users/:key", async (req, res) => {
  const key = req.params.key;
  if (key === 'joao') {
  const { name, email, password } = req.body;
  const userService = new UserService();
  await userService.add(name, email, password);
  return res.status(201).json({ message: "sucess" });
  } else {
    return res.status(400).json({ message: 'Chave invalida!'});
  }
});
*/

// R - READ
/*
app.get("/users", async (req, res) => {
  const userService = new UserService();
  const users = await userService.findAll();
  return res.status(200).json(users);
});
*/
/*
app.get("/users/:key", authMiddleware, async (req, res) => {
  const userService = new UserService();
  const users = await userService.findAll();
  return res.status(200).json(users);
});
*/

/*
  const { name, email } = res.body;
  const user = new UserService();
  user.add();
  user.getAll();
*/
