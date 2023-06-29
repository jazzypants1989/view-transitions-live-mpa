import express from "express"

const app = express()

app.use(express.static("no-save"))

app.listen(3000, () => {
  console.log("click here: http://localhost:3000")
})
