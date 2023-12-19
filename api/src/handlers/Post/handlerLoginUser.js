const bcrypt = require("bcrypt");
const getUser = require("../../controllers/getUser");
const generateToken = require("../../utils/generate");

const handlerLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await getUser(email);

    if (password) {
      const validatePassword = await bcrypt.compare(
        password,
        user?.dataValues.password
      );

      if (validatePassword) {
        const { id, email, username, rol, erased } = user;
        const token = await generateToken(id, email, username, rol, erased);

        return res.status(200).json({
          message: "¡Has ingresado correctamente!",
          token,
          rol,
          erased,
        });
      } else {
        res.status(202).json({ message: "¡Credenciales incorrectas!" });
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerLogin;
