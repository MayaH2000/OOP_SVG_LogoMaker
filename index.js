const fs = require('fs');
const inquirer = require('inquirer');
const { createSVG } = require('./svgGenerator'); 

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: (value) => value.length <= 3, 
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (color keyword or hexadecimal number):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (color keyword or hexadecimal number):',
  },
];

function writeSVGFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg')
  );
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const svgContent = createSVG(answers); 
    writeSVGFile('logo.svg', svgContent);
  });
}

init();
