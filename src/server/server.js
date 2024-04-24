const express = require("express")
const app = express()

app.listen(8080, async () => console.log("[!] API INICIADA!!!"))

module.exports = { app }