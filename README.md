<h1 align="center">ADMIN.BIKE-BOOKING.COM</h1>

## To run the project follow this steps:

1. `git clone https://github.com/xokcton/bike-booking.git`
1. `cd ./bike-booking`
1. Install client dependencies: `cd ./client/ && npm i`
1. Remove the .example in the .env.local.example file
1. Install server dependencies: `cd ../server/ && npm i`
1. Create a Mongodb database and get the connection URL
1. Remove the .example in the .env.example file and paste ur URL into the MONGODB_URL field
1. Start the server: `npm run start:dev`
1. Open a second terminal tab and launch the client: `npm run dev`
1. The application is available at: http://localhost:5173/
