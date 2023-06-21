const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const port = 3000

app.use(bodyParser.text({
    type: function(req) {
        return 'text';
    }
}));

app.all('/test', function (req, res) {
    console.log(req.body);

    res = res.status(200);
    // if (req.get('Content-Type')) {
    //     console.log("Content-Type: " + req.get('Content-Type'));
    //     res = res.type(req.get('Content-Type'));
    // }
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
