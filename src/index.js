const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const postRouter = require('./routers/post')

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(userRouter)
app.use(postRouter)

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
  });

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})