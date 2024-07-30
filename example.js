// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch
const fetch = require('node-fetch');

const bodyData = `{
  "fields": {
    "description": {
      "content": [
        {
          "content": [
            {
              "text": "Order entry fails when selecting supplier.",
              "type": "text"
            }
          ],
          "type": "paragraph"
        }
      ],
      "type": "doc",
      "version": 1
    },
    "duedate": "2019-05-11",
    "environment": {
      "content": [
        {
          "content": [
            {
              "text": "UAT",
              "type": "text"
            }
          ],
          "type": "paragraph"
        }
      ],
      "type": "doc",
      "version": 1
    },
    "issuetype": {
      "id": "10006"
    },
    "project": {
      "key": "AK"
    },
    "summary": "Main order flow broken",
  },
  "update": {}
}`;

fetch('https://anideepkalia71.atlassian.net/rest/api/3/project', {
  method: 'POST',
  headers: {
    'Authorization': `Basic ${Buffer.from(
      'anideepkalia@gmail.com:ATATT3xFfGF02jMIoAgsO8lF2qbol5csKa6xYu3O9afNcbebKeDkAAx76LM5WmN5uojwJ44R0PRNGJ9xcgbs2f2cBCSnF2iczb67rpNQInnRRxJ_Qvkp0-H5XN2jtUIJnoijMbLGz4gqK30tPsBH-l_dDSOYgr-t09Jx--j_y_weAjKFAeQOUko=CFEC54EA'
    ).toString('base64')}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: bodyData
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));