const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('./dist/chatapp'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: './dist/chatapp/' }
    );
});

app.listen(6002);
