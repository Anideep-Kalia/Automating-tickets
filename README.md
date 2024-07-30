# Automated Jira Ticket Creation from GitHub Issues

This project automates the creation of Jira tickets based on comments in GitHub issues. When an admin comments `/jira` on a GitHub issue, a webhook triggers a Node.js application deployed on an AWS EC2 instance, which then creates a corresponding Jira issue.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [How It Works](#how-it-works)
4. [Technologies Used](#technologies-used)
5. [Setup and Installation](#setup-and-installation)
6. [Environment Variables](#environment-variables)
7. [Deployment](#deployment)
8. [Webhook Configuration](#webhook-configuration)
9. [License](#license)

## Introduction

This project automates the process of creating Jira issues based on comments made in GitHub issues. If an admin comments `/jira` on a GitHub issue, a webhook triggers a Node.js application that creates a corresponding issue in Jira.

## Features

- Automated Jira ticket creation from GitHub comments.
- Secure handling of sensitive information using environment variables.

## How It Works

![image](https://github.com/user-attachments/assets/b4b9cbc9-d3bf-4108-b1d1-a766902e957b)

1. **GitHub Issue Creation**
   - A user creates an issue in the GitHub repository.
   
2. **Admin Analysis**
   - The admin analyzes the issue to determine if it's genuine.

3. **Admin Comments `/jira`**
   - If the issue is genuine, the admin comments `/jira` on the GitHub issue.

4. **GitHub Webhook Trigger**
   - The comment triggers a webhook configured in the GitHub repository.

5. **Webhook Payload Sent to EC2 Instance**
   - The webhook sends a payload to the Node.js application running on the AWS EC2 instance.

6. **Node.js Application Processes Payload**
   - The Node.js application receives the payload and extracts relevant information.

7. **Jira API Call**
   - The application makes a call to the Jira API to create a new issue using the extracted information.

8. **Jira Issue Created**
   - A new issue is created in Jira under the organization’s account.


## Technologies Used

- Node.js
- Express.js
- Jira REST API
- AWS EC2
- GitHub Webhooks

## Setup and Installation

1. **Create a Jira Account and Obtain API Token**
   - Sign up for a Jira account.
   - Generate an API token from your Jira account settings.

2. **Create Node.js Application**
   - Initialize a Node.js application.
   - Integrate Jira APIs for issue creation.

3. **Deploy Application on AWS EC2**
   - Set up an AWS EC2 instance.
   - Deploy the Node.js application on the EC2 instance.

4. **Create `/create-jira` Endpoint**
   - Implement an endpoint to handle the creation of Jira issues.

## Environment Variables

Set the following environment variables in your GitHub repository settings (under Secrets):

- `JIRA_HOST`: Your Jira instance URL.
- `JIRA_EMAIL`: Your Jira account email.
- `JIRA_API_TOKEN`: Your Jira API token.

## Deployment

1. **Launch EC2 Instance**
   - Launch an EC2 instance on AWS.
   - Deploy your Node.js application on the instance.

2. **Start the Node.js Application**
   - Ensure the application is running and accessible.

## Webhook Configuration

1. **Set Up GitHub Webhook**
   - Navigate to your GitHub repository settings.
   - Configure a webhook with the following details:
     - Payload URL: `http://your-ec2-instance-ip:port/create-jira`
     - Content type: `application/json`
     - Trigger: Issue comments

## License

This project is licensed under the MIT License.
