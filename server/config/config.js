///puerto

process.env.PORT = process.env.PORT || 8080;



process.env.NODE_ENV = process.env.NODE_ENV || 'desarrollo'


//base de datos
let urlDB;
if (process.env.NODE_ENV === 'desarrollo') {

    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.mongo_URL;
}
process.env.URLDB = urlDB;