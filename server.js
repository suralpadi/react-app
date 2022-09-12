const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
var AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
s3 = new AWS.S3({ apiVersion: '2006-03-01' });

app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

const bucketParams = {
  Bucket: 'BUCKET_NAME',
};

// create a GET route
app.get('/getBanners', (req, res) => {
  console.log('req get :>> ');
  s3.listObjects(bucketParams, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
      res.status(200).send({ msg: "Success" });
    }
  });
});
