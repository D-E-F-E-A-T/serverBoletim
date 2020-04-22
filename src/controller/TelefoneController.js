const db = require("../config/database");

// ==> Método responsável por listar indicadores de telefonia:
exports.listAll = async (req, res) => {
    const response = await db.query('SELECT * FROM perf_unificado.vwm_perf_fone_dia WHERE data = current_date');
    res.status(200).send(response.rows);
};