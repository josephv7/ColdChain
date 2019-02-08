'use strict';

const fileName = '/Users/iamjosephvarghese/Downloads/img.jpg';

// async function detectColours(fileName) {
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();



client
  .imageProperties(fileName)
  .then(results => {
      const labels = results.imagePropertiesAnnotation;
    // const labels = results.imagePropertiesAnnotation.dominantColors.colors;

    console.log('Labels:');
    // labels.forEach(label => console.log(label.description));

    console.log(results.imagePropertiesAnnotation);
    // labels.forEach(label => console.log(label));
  })
  .catch(err => {
      console.log('hi');
    console.error('ERROR:', err);
  });


/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
//const fileName = '/Users/iamjosephvarghese/Downloads/img.jpg';
// Performs property detection on the local file


// const [result] = await client.imageProperties(fileName);
// const colors = result.imagePropertiesAnnotation.dominantColors.colors;
// colors.forEach(color => console.log(color));



// }

// detectColours(fileName);