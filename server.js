//Dependencies

const express = require("express");
const path = require("path");

//Express app setup

const app = express();
const PORT = process.env.port || 3000;

//Data parsing for Express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//VARIABLES
//Reservation data
const reservation = [
  {
    name: "John Smith",
    phoneNumber: 123 - 456 - 7890,
    email: "jsmith@email.com",
    uniqueID: 1234,
  },
];
//Waitlist data
const waitlist = [
  {
    name: "Mary Jones",
    phoneNumber: 456 - 789 - 0123,
    email: "jonesy@yahoo.com",
    uniqueID: 23,
  },
];

//ROUTES
//route to home page
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "home.html")));

//route to table API
app.get("/api/tables", (req, res) => res.json(tables));

//route to wait list API
app.get("/api/waitlist", (req, res) => res.json(waitlist));

//Creating new reservations
app.post("/api/tables", (req, res) => {
  const newReservation = req.body;
  console.log(newReservation);
  res.json(newReservation);
});

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
