const express = require("express")

const app = express()

const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.send("Hello Express!!!!")
})

app.listen(PORT, () => {
    console.log(`App is running on post ${PORT}`);
})