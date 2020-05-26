const db = require("../config/database");

// ==> Método responsável por listar indicadores de telefonia:
exports.listAll = async (req, res) => {
    const response = await db.query('SELECT * FROM tbl_teste');
    res.status(200).send(response.rows);
};
