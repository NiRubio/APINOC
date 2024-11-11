import user from "../models/user.model.js";

export const register = async (req, res) => {
  console.log(req.body);
  //res.send("registrado")
  const { email, password, username } = req.body;
  try {
    const nuevoUser = new user({
      username,
      email,
      password,
    });
    const userGuardado = await nuevoUser.save();
    res.json({
      message: "Usuario creado",
      username: nuevoUser.username,
      email: nuevoUser.email,
      password: nuevoUser.password,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const buscar = async (req, res) => {
  console.log("Encontrando usuarios");
  try {
    const guardados = await user.find();
    let usuarios = [];

    guardados.forEach((i) =>
      usuarios.push({ username: i.username, email: i.email })
    );

    console.log("Lista de usuarios enviandose");

    return res.json(usuarios);
  } catch (error) {
    res.status();
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
      const userFound = await user.findOne({ username });

      if (!userFound) {
          return res.status(404).json({ message: "Usuario no encontrado" });
      }

      // Compara la contraseña (aquí podrías usar un hash para la seguridad)
      if (userFound.password !== password) {
          return res.status(401).json({ message: "Contraseña incorrecta" });
      }

      // Si todo está bien, retorna un mensaje o un token
      res.json({ message: "Login exitoso", username: userFound.username });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};


export const logout = async (req, res) => res.send("desconectando");
