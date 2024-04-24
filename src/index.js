const config = require("../config.json")
const axios = require("axios")
const express = require("express")
const { app } = require("./server/server")

app.get("/", async (req, res) => {
    res.send("API Discord Route: /users/:id")
})

app.get("/users/:id", async (req, res) => {
    const userId = req.params.id
    const requestSent = await axios.get(`https://discord.com/api/users/${userId}/profile`, {
        headers: {Authorization: config.t}
    })
    res.status(201).json(requestSent.data)
})
