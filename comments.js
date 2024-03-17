//Create web server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const comments = require('./comments');
// Add a route
app.get('/comments', (req, res) => {
    res.json(comments);
});
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
// Path: comments.js
const comments = [
    { username: 'user1', comment: 'comment1' },
    { username: 'user2', comment: 'comment2' },
    { username: 'user3', comment: 'comment3' },
];
module.exports = comments;
```

