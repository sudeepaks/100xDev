const express = require('express');
const users = require('./MOCK_DATA.json')


const app = express();
const PORT = 8000;

//ROts
app.get("/api/users", (req, res) => {
    return res.json(users)
})

app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
     </ul>`;
     res.send(html)   
})


app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id)
    return res.json(user)
})

app.post("/api/users", (req, res) => {
    // TODO: create new user
    return res.json({ status: "pendin" })
})

app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user)
    })
    .patch((req, res) => {
        //Edit user with id
        return res.json({ status: "Pendin"})
    })
    .delete((req, res) => {
        // Delete user with id
        return res.json({ status: "Pendin"})
    })

app.listen(PORT, () => console.log(`server started at PORT: ${PORT}`));