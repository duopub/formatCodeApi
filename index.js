const express = require('express');
const cors = require('cors');
const prettier = require('prettier');
const prettierPHP = require('@prettier/plugin-php');
const prettierRuby = require('@prettier/plugin-ruby');
const prettierCsharp = require('prettier-plugin-csharp');
const prettierSwift = require('@prettier/plugin-swift');
const prettierXML = require('@prettier/plugin-xml');
const prettierApex = require('prettier-plugin-apex');
const prettierPython = require('@prettier/plugin-python');
const prettierJava = require('prettier-plugin-java');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.raw({type: 'text/plain'}));
app.use(cors());
function formatType( req , parser ) {
    let formatedData = prettier.format( req.body.toString(),{ parser: parser } );
    return encodeURIComponent(formatedData);
}
app.post('/html', (req, res) => {
    res.send(formatType( req , "html" ));
});
app.post('/javascript', (req, res) => {
    res.send(formatType( req , "babel" ));
});
app.post('/json', (req, res) => {
    res.send(formatType( req , "json" ));
});
app.post('/markdown', (req, res) => {
    res.send(formatType( req , "markdown" ));
});
app.post('/vue', (req, res) => {
    res.send(formatType( req , "vue" ));
});
app.post('/angular', (req, res) => {
    res.send(formatType( req , "angular" ));
});
app.post('/typescript', (req, res) => {
    res.send(formatType( req , "typescript" ));
});
app.post('/yaml', (req, res) => {
    res.send(formatType( req , "yaml" ));
});
app.post('/graphql', (req, res) => {
    res.send(formatType( req , "graphql" ));
});
function formatmoreType( req , plugins, parser ) {
    let formatedData = prettier.format( req.body.toString(),{ plugins: plugins,parser: parser } );
    return encodeURIComponent(formatedData);
}
app.post('/java', (req, res) => {
    res.send(formatmoreType( req , prettierJava ,"java" ));
});
app.post('/php', (req, res) => {
    res.send(formatmoreType( req , prettierPHP , "php" ));
});
app.post('/ruby', (req, res) => {
    res.send(formatmoreType( req , prettierRuby , "ruby" ));
});
app.post('/csharp', (req, res) => {
    res.send(formatmoreType( req , prettierCsharp , "cs" ));
});
app.post('/swift', (req, res) => {
    res.send(formatmoreType( req , prettierSwift , "swift" ));
});
app.post('/python', (req, res) => {
    res.send(formatmoreType( req , prettierPython , "python" ));
});
app.post('/apex', (req, res) => {
    res.send(formatmoreType( req , prettierApex , "apex" ));
});
app.post('/xml', (req, res) => {
    res.send(formatmoreType( req , prettierXML , "xml" ));
});
const port = process. env. PORT || 600 ;
app.listen( port );