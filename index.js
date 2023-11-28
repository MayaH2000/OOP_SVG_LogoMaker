const fs = require('fs');
const inquirer = require('inquirer');


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
    message: 'Enter text color:',
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
    message: 'Enter shape color:',
  },
];

function createSVG(answers) {
  // Logic to generate SVG based on user input
  const { text, textColor, shape, shapeColor } = answers;
  class Shape {
    constructor(type) {
      this.type = type;
    }
    
    // Additional methods related to shapes
  }
  
  class Color {
    constructor(value) {
      this.value = value;
    }
    
    // Additional methods related to colors
  }
  
  class Text {
    constructor(value) {
      if (value.length > 3) {
        throw new Error('Text should be up to three characters long.');
      }
      this.value = value;
    }
    
    // Additional methods related to text
  }
  
  function createSVG(answers) {
    const { text, textColor, shape, shapeColor } = answers;
  
    const textObj = new Text(text);
    const textColorObj = new Color(textColor);
    const shapeObj = new Shape(shape);
    const shapeColorObj = new Color(shapeColor);
    
    // Use these objects to construct the SVG content
    const svgContent = `<svg width="100" height="100">
      <text x="10" y="20" fill="${textColorObj.value}">${textObj.value}</text>
      <!-- Other shapes or elements based on user input -->
    </svg>`;
    
    return svgContent;
  }
  

async function writeSVGFile(fileName, data) {
    console.log(fileName, data);
  try {
    await fs.writeFileSync(fileName, data);
    console.log('Generated logo.svg');
  } catch (err) {
    console.error(err);
  }
}

async function init() {
  try {
    const answers = await inquirer.prompt(questions); // Use inquirer.prompt directly
    const svgContent = createSVG(answers);
    await writeSVGFile('logo.svg', svgContent);
    console.log('Generated logo.svg');
  } catch (err) {
    console.error(err);
  }
}

init();
