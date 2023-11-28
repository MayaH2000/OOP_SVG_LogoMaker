const fs = require('fs');
const inquirer = require('inquirer');

class Shape {
  constructor(userData) {
    this.userData = userData;
  }

  render() {
    throw new Error("render method must be implemented by child classes");
  }
}

class Circle extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.userData.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.userData.textColor}">${this.userData.logoText}</text>
      </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="300" fill="${this.userData.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.userData.textColor}">${this.userData.logoText}</text>
      </svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 280,180 20,180" fill="${this.userData.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.userData.textColor}">${this.userData.logoText}</text>
      </svg>`;
  }
}

const promptUser = async () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "logoText",
        message:
          "What text would you like to include in your logo? (enter up to three characters)",
        validate: function (input) {
          return input.length === 3
            ? true
            : "Please enter exactly 3 characters.";
        },
      },
      {
        type: "input",
        name: "textColor",
        message:
          "What color would you like the logo text color to be? (enter color keyword)",
      },
      {
        type: "list",
        name: "shape",
        message: "What shape would you like to use?",
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message:
          "What color would you like the logo shape color to be? (enter color keyword)",
      },
    ])
    .then((data) => {
      return data;
    });
};

function createSVG(answers) {
  // Logic to generate SVG based on user input
  const { text, textColor, shape, shapeColor } = answers;
  // Construct SVG based on user input
  const svgContent = `<svg width="100" height="100">
    <!-- Your SVG content here -->
    <text x="10" y="20" fill="${textColor}">${text}</text>
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
    const answers = await promptUser();
    let shape;
    switch (answers.shape.toLowerCase()) {
      case "circle":
        shape = new Circle(answers);
        break;
      case "triangle":
        shape = new Triangle(answers);
        break;
      case "square":
        shape = new Square(answers);
        break;
      default:
        throw new Error("Invalid shape selected");
    }

    const svgContent = shape.render();
    await writeSVGFile('logo.svg', svgContent);
    console.log('Generated logo.svg');
  } catch (err) {
    console.error(err);
  }
}

init();
