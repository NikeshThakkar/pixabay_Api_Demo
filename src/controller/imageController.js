const express = require('express');
const imagesRouter = express.Router();
const axios = require('axios');

// function for bussiness logic
imagesRouter.get("/search-image", async (req, res) => {
    try{
        const { image_type = 'all',colors = '',category = '' } = req.query; 
        const response = await axios({
			url: `https://pixabay.com/api/?key=37196407-17532bad5985b2fa31aa722d0&image_type=${image_type}&colors=${colors}&category=${category}`,
			method: "get",
		});
        res.status(200).json(response.data);

    }catch(error){
        res.status(500).send({
            success: false,
            error: error.message,
            stack: error.stack,
        });
    }
});


module.exports = imagesRouter;