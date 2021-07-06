const express = require('express')
const app = express()
const {createClient } = require("webdav");
const bodyParser = require('body-parser')
const cors = require('cors')

let PORT = process.env.PORT || 3000
app.use(bodyParser())
app.use(cors())


app.post('/api/', async (req, res) => {
    const {email, password, webdav} = req.body
    try {
        const client = createClient(
            webdav,
            {
                username: email,
                password: password,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
                    }
            }
        );
        const directoryItems = await client.getDirectoryContents("/");
        res.send(directoryItems)
    } catch (error) {
        console.log(error)
    }
    
    
})


app.listen(PORT, ()=>{
    try {
        console.log(`server has been started on PORT ${PORT}`)
    } catch (error) {
        console.log(error)
    }
})