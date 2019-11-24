const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-west-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.put({
    TableName: 'Cloud_Infrastructure',
    Item: {
        UserId: 'bb',
        Date: new Date(),
        title: 'changed title',
        content: 'changed content'
    }});