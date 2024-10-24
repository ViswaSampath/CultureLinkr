const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/calculate-total', (req, res) => {
    const products = req.body.products;

    if (!Array.isArray(products)) {
        return res.status(400).json({ error: 'Products should be an array.' });
    }

    let totalValue = 0;

    products.forEach(product => {
        const { name, price, quality } = product;

        if (typeof price !== 'number' || price < 0) {
            return res.status(400).json({ error: 'Price must be a non-negative number.' });
        }
        if (typeof name !== 'string' || name.trim() === '') {
            return res.status(400).json({ error: 'Name must be a non-empty string.' });
        }
        if (typeof quality !== 'string' || quality.trim() === '') {
            return res.status(400).json({ error: 'Quality must be a non-empty string.' });
        }

        totalValue += price; 
    });

   
    res.json({ totalValue });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

fetch('http://localhost:3000/api/calculate-total', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        products: [
            { name: "Product A", price: 10.0, quality: "good" },
            { name: "Product B", price: 20.0, quality: "excellent" },
            { name: "Product C", price: 15.5, quality: "average" }
        ]
    }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

