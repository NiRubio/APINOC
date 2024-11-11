import app from './app.js';
import {connectDB} from './db.js';

connectDB();
app.listen(8000);

console.log("Se escucha el servidor");
