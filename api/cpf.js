const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { cpf } = req.query;
  if (!cpf) {
    return res.status(400).json({ error: 'CPF não informado' });
  }
  try {
    const response = await fetch(`https://rfb-blog.site/cpfs/new-api.php?cpf=${cpf}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar a API externa' });
  }
}; 
