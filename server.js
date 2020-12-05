//Dependencies

const express = require('express');
const path = require('path');


//Express app setup

const app = express()
const PORT = process.env.port || 3000;

//Data parsing for Express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//ROUTES
//route to home page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

//route to table API
app.get('/api/tables', (req, res) => res.json(tables));

//route to wait list API
app.get('/api/waitlist' (req, res) => res.json(waitlist)); 


//Creating new reservations
app.post('/api/tables', (req, res) => {
    const newReservation = req.body;
    console.log(newReservation);
    res.json(newReservation);
})


// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
