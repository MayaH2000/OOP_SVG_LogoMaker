# OOP_SVG_LogoMaker
## Description

This project is a Node.js-based SVG generator that crafts customized SVG images through intuitive user prompts. By utilizing the command-line interface, users are guided to input preferences such as text, colors, and desired shapes. Leveraging these inputs, the generator constructs vibrant SVG visuals, incorporating the specified text, text color, and chosen shape with their respective colors. Each shape—be it a circle, triangle, or square—is dynamically created based on user selections, providing a hassle-free method to generate personalized SVG imagery effortlessly.

## Motivation
This project stemmed from a desire to simplify the creation of custom SVG images. I envisioned a tool that enables users, regardless of their coding expertise, to effortlessly design SVG graphics by interacting with intuitive prompts. By offering a straightforward way to input text, choose colors, and select shapes, I aimed to empower individuals to generate personalized SVG visuals without the complexities of traditional graphic design software. This motivation to democratize the creation of SVGs drove the development of an accessible and user-friendly tool through Node.js, catering to diverse design preferences and skill levels.

## Problem Solving
The SVG generator acts as a solution bridging the gap between intricate graphic design software and users seeking a simpler yet effective way to create SVG images. It addresses the challenge of complexity in traditional design tools by offering a straightforward, step-by-step approach through prompts. By leveraging Node.js and inquirer, it provides an interactive environment where users can input text, select colors, and choose shapes, simplifying the typically intricate process of SVG creation. This application streamlines the creation of custom graphics, catering to a wider audience beyond professional designers, allowing anyone to effortlessly generate personalized SVGs for various purposes, from website graphics to visual aids, thus resolving the accessibility barrier associated with intricate design software.

## Learning Outcome
The SVG Logo Maker presents a unique learning opportunity in multiple domains. From a technical standpoint, building this application offers hands-on experience with Node.js, enabling users to understand asynchronous JavaScript programming, file system interactions, and using external packages like Inquirer for user prompts. It fosters familiarity with SVG creation, encouraging the understanding of scalable vector graphics and their manipulation through code. Additionally, it introduces object-oriented programming concepts through the implementation of classes for shapes, colors, and text.

Challenges in developing the SVG Logo Maker might include managing user inputs and validations effectively, especially when dealing with varied and potentially incorrect user inputs. Ensuring proper error handling, validation checks, and a seamless user experience through the command-line interface can be challenging. Balancing simplicity in user interactions while providing flexibility in design options also poses a challenge, as the application aims to simplify SVG creation while accommodating diverse user preferences and choices. Moreover, handling the intricacies of SVG markup generation dynamically based on user inputs and ensuring cross-platform compatibility might also present challenges during development.


- [Installation](#installation)
- [License](#license)
- [Walkthrough Link](#WalkthroughLink)
- [Credits](#credits)

# Installation
## Prerequisites:
Ensure you have Node.js and npm installed on your machine.
Steps:
Clone the Repository:

bash
Copy code
git clone <git@github.com:MayaH2000/OOP_SVG_LogoMaker.git>
Navigate to the Project Directory:

bash
Copy code
cd <OOP_SVG_LogoMaker>
Install Dependencies:

bash
Copy code
npm install
Run the Application:

bash
Copy code
node index.js
Answer the Questions:

This command starts SVG LogoMaker and prompts you for inputs to generate an SVG logo.

Follow the Prompts:

Respond to the prompts in the command line, providing details such as a 3 characters, shape, shape color, and shape text color as requested by the tool.
SVG Logo Generation:

After completing the prompts, the tool will generate a svg file based on the provided inputs.
Locate the SVG:

Find the generated logo.svg in the root directory of the SVG LogoMaker project.
Customize and Use:

Open the generated logo.svg file path to review its content.
Make any additional modifications or customizations to suit your project's specific requirements.

## License
# MIT License

Copyright (c) 2023 Maya Hernandez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Walkthrough Link


## Screenshot of Application


## Credits
# This project was initiated with starter code obtained from one of my own projects, README_Generator. I was able to substancially refractor the code from README_Generator to meet the necessary criteria for my OOP_SVG_LogoMaker project.
