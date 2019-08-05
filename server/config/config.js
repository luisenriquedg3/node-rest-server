///puerto

process.env.PORT = process.env.PORT || 8080;



process.env.NODE_ENV = process.env.NODE_ENV || 'desarrollo'


//base de datos
let urlDB;
if (process.env.NODE_ENV === 'desarrollo') {

    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://himnia:7yylV5w5nNCTd8XJ@cluster-node-y3ls2.mongodb.net/cafe';
}
process.env.URLDB = urlDB;