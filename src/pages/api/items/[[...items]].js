async function handler(req, res) {
  const { search, limit } = req.query;

  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=:${search}&limit=${limit}`);

    if (response.ok) {
      const json = await response.json();
      res.status(200).json(json);
    } else {
    }
  } catch (e) {
    res.status(401);
  }
}

export default handler;
