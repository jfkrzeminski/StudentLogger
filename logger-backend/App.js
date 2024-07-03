import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import session from "express-session";
import StudentRoutes from './students/routes.js';
import PassesRoutes from './passes/routes.js';
import "dotenv/config";

// const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/kanbas'
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}));
const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.HTTP_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));
app.use(express.json());
StudentRoutes(app);
PassesRoutes(app);

app.listen(process.env.PORT || 4000);