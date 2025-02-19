const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
    try {
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();

        await page.goto("https://www.aleatorios.com/");

        const palabra = await page.$eval(
            "h2",
            (element) => element.textContent,
        );

        await browser.close();

        res.json({ palabra });
    } catch (error) {
        console.error("Error obteniendo la palabra:", error);
        res.status(500).json({ error: "Error al obtener la palabra" });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
