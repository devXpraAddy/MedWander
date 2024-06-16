const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());
app.use(cors());

app.post("/submit", async (req, res) => {
  const { formType, name, countryCode, phoneNumber } = req.body;

  try {
    const newForm = await prisma.form.create({
      data: {
        formType,
        name,
        countryCode,
        phoneNumber,
      },
    });
    res.status(201).json(newForm);
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "Error saving form data" });
  }
});

app.get("/refresh", async (req, res) => {
  try {
    const forms = await prisma.form.findMany();
    // Logic to update Google Sheets goes here
    res.json(forms);
  } catch (error) {
    console.error("Error fetching form data:", error);
    res.status(500).json({ error: "Error fetching form data" });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
