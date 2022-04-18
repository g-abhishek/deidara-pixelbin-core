const obj = {
    s3PresignedUrl: {
      url: 'https://s3.ap-south-1.amazonaws.com/erase-erasex0-erasebg-assets-ap-south-1',
      fields: {
        key: 'uploads/so/original/37eb9c18-058e-4f4c-987a-272565c7257d.jpeg',
        'x-amz-meta-assetData': '{"orgId":534,"type":"file","name":"asset-LLBER9wgd","path":"","fileId":"asset-LLBER9wgd","format":"jpeg","s3Bucket":"erase-erasex0-erasebg-assets-ap-south-1","s3Key":"uploads/so/original/37eb9c18-058e-4f4c-987a-272565c7257d.jpeg","access":"public-read","tags":[],"metadata":{"source":"signedUrl"},"overwrite":false,"filenameOverride":false}',
        bucket: 'erase-erasex0-erasebg-assets-ap-south-1',
        'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
        'X-Amz-Credential': 'AKIATGSK32LKLSRL3Q47/20220325/ap-south-1/s3/aws4_request',
        'X-Amz-Date': '20220325T053302Z',
        Policy: 'eyJleHBpcmF0aW9uIjoiMjAyMi0wMy0yNVQwNTozODowMloiLCJjb25kaXRpb25zIjpbWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMCwyNjIxNDQwMF0seyJrZXkiOiJ1cGxvYWRzL3NvL29yaWdpbmFsLzM3ZWI5YzE4LTA1OGUtNGY0Yy05ODdhLTI3MjU2NWM3MjU3ZC5qcGVnIn0seyJ4LWFtei1tZXRhLWFzc2V0RGF0YSI6IntcIm9yZ0lkXCI6NTM0LFwidHlwZVwiOlwiZmlsZVwiLFwibmFtZVwiOlwiYXNzZXQtTExCRVI5d2dkXCIsXCJwYXRoXCI6XCJcIixcImZpbGVJZFwiOlwiYXNzZXQtTExCRVI5d2dkXCIsXCJmb3JtYXRcIjpcImpwZWdcIixcInMzQnVja2V0XCI6XCJlcmFzZS1lcmFzZXgwLWVyYXNlYmctYXNzZXRzLWFwLXNvdXRoLTFcIixcInMzS2V5XCI6XCJ1cGxvYWRzL3NvL29yaWdpbmFsLzM3ZWI5YzE4LTA1OGUtNGY0Yy05ODdhLTI3MjU2NWM3MjU3ZC5qcGVnXCIsXCJhY2Nlc3NcIjpcInB1YmxpYy1yZWFkXCIsXCJ0YWdzXCI6W10sXCJtZXRhZGF0YVwiOntcInNvdXJjZVwiOlwic2lnbmVkVXJsXCJ9LFwib3ZlcndyaXRlXCI6ZmFsc2UsXCJmaWxlbmFtZU92ZXJyaWRlXCI6ZmFsc2V9In0seyJidWNrZXQiOiJlcmFzZS1lcmFzZXgwLWVyYXNlYmctYXNzZXRzLWFwLXNvdXRoLTEifSx7IlgtQW16LUFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYifSx7IlgtQW16LUNyZWRlbnRpYWwiOiJBS0lBVEdTSzMyTEtMU1JMM1E0Ny8yMDIyMDMyNS9hcC1zb3V0aC0xL3MzL2F3czRfcmVxdWVzdCJ9LHsiWC1BbXotRGF0ZSI6IjIwMjIwMzI1VDA1MzMwMloifV19',
        'X-Amz-Signature': '5d1dd190169825912ec62d240b20ae7cb0b344a949d9ab1f1f1a901dffd8ae7b'
      }
    }
  };

  const fileInput = document.getElementById("fileUpload");
  fileInput.addEventListener("change", (e)=>{
      const file = e.target.files[0];
      Pixelbin.upload(file, obj.s3PresignedUrl)
        .then(() => {
            console.log("File Uploaded Successfully");
        })
        .catch((err) => {
            console.log("Error while uploading");
            console.log(err);
        })
  })