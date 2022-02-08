module.exports = {
	removeUsername: (req, res) => {
		const { id } = req.params;
  const db = req.app.get("db");

  try {
    db.user.set_username(id);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  };
	},
}