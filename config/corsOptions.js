const whiteList = ['https://www.yoursite.com','https://127.0.0.1:5500','https://localhost:3500']
const corsOptions = {
    orgin: (orgin, callback) => {
        if (whiteList.indexOf(orgin) !== -1) {
            callback(null,true)
        } else {
            callback(new Error('Not Allowed by CORS'))
        }
    },
    optionsSuccessStatus:200
}