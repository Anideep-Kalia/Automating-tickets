const express = require('express');
const router = express.Router();
const axios = require('axios');


// Define the route to create Jira issue
app.post('/createJira', async (req, res) => {
    const url = 'https://anideepkalia71.atlassian.net/rest/api/3/issue';

    const API_TOKEN = 'ATATT3xFfGF02jMIoAgsO8lF2qbol5csKa6xYu3O9afNcbebKeDkAAx76LM5WmN5uojwJ44R0PRNGJ9xcgbs2f2cBCSnF2iczb67rpNQInnRRxJ_Qvkp0-H5XN2jtUIJnoijMbLGz4gqK30tPsBH-l_dDSOYgr-t09Jx--j_y_weAjKFAeQOUko=CFEC54EA';
    const auth = {
        username: 'anideepkalia71@gmail.com',
        password: API_TOKEN
    };

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    const payload = {
        fields: {
            description: {
                content: [
                    {
                        content: [
                            {
                                text: 'Order entry fails when selecting supplier.',
                                type: 'text'
                            }
                        ],
                        type: 'paragraph'
                    }
                ],
                type: 'doc',
                version: 1
            },
            project: {
                key: 'AK'
            },
            issuetype: {
                id: '10006'
            },
            summary: 'Main order flow broken'
        },
        update: {}
    };

    try {
        const response = await axios.post(url, payload, {
            headers: headers,
            auth: auth
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating Jira issue');
    }
});

