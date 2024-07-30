const express = require('express');
const router = express.Router();
const axios = require('axios');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Define the route to create Jira issue
router.post('/createJira', async (req, res) => {
    const url = 'https://anideepkalia71.atlassian.net/rest/api/3/issue';
    const API_TOKEN = process.env.JIRA_TOKEN;  // Accessing the GitHub secret
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

app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
