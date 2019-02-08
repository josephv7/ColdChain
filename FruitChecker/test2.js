'use strict';

const fileName = '/Users/iamjosephvarghese/Downloads/img.jpg';



// Creates a client
async function detectColours() {
    const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

const [result] = await client.imageProperties('/Users/iamjosephvarghese/Downloads/img2.jpg');
const colors = result.imagePropertiesAnnotation.dominantColors.colors;
colors.forEach(color => console.log(color));
}

detectColours().catch(console.error);