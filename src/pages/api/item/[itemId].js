async function handler(req, res) {
  const { itemId } = req.query;

  console.log('itemId', itemId);

  return res.status(200);

  // try {
  //   const response = await fetch(`https://api.mercadolibre.com/items/:​${itemId}/description`);

  //   console.log('response', response);

  //   if (response.ok) {
  //     const json = await response.json();
  //     res.status(200);

  //     return res.end();
  //   } else {
  //     throw new Error('MELI error');
  //   }
  // } catch (e) {
  //   return res.status(401);
  // }
}

export default handler;
