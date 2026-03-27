# Simple Node.js + React App (with a CI-breaking error)

This repository contains a minimal Node.js backend and React frontend with a deliberate error that makes the CI pipeline fail.

## Error description

In `backend/tests/api.test.js`, the test expects the API endpoint `/api/hello` to return:

```json
{ "message": "Hello, World!" }