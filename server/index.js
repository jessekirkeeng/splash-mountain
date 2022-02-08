require("dotenv").config();
const massive = require("massive");
const express = require("express");
const session = require("express-session");
const app = express();
app.use(express.json());

const {
	removeUsername
} = require('./controller/operator')

const { SESSION_SECRET, PORT, CONNECTION_STRING } = process.env;

app.use(
	session({
		resave: false,
		saveUninitialized: true,
		secret: SESSION_SECRET,
		cookie: { maxAge:  60000 * 60 * 24 * 90}
})
);

massive({
	connectionString: CONNECTION_STRING,
	ssl: { rejectUnauthorized: false },
}).then(db => {
	app.set("db", db);
	console.log("db connected");
}).catch(err => console.log(err));


app.put("/api/auth/remove/:id", removeUsername);

const port = PORT || 3131;

app.listen(port, () => console.log(`${port}`));