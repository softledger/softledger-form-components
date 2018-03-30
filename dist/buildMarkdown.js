'use strict';var path = require('path');
var fs = require('fs');
var reactDocgen = require('react-docgen');
var ReactDocGenMarkdownRenderer = require('react-docgen-markdown-renderer');
var componentPath = path.join(__dirname, 'src/');
var renderer = new ReactDocGenMarkdownRenderer({
  componentsBasePath: __dirname });


//output path
var readmeFile = path.join(__dirname, 'README.md');

//empty file
fs.writeFileSync(readmeFile, '');


//loop through all files in path
fs.readdirSync(componentPath).forEach(function (file) {
  //only do jsx files
  if (file.indexOf('.jsx') === -1) return;
  console.log("file", file);
  var content = fs.readFileSync(path.join(componentPath, file));
  //read each file
  var doc = reactDocgen.parse(content);

  //append the results to the file
  fs.appendFileSync(readmeFile, renderer.render(
  /* The path to the component, used for linking to the file. */'' +
  componentPath + file,
  /* The actual react-docgen AST */
  doc,
  /* Array of component ASTs that this component composes*/
  []));
});