// function to generate markdown for README




function generateMarkdown(data) {
  return `  
  # ${data.title}

  # Description

  ${data.description}

  ![License](https://img.shields.io/badge/License-${data.license}-red)

  ## Table of Content 
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [MIT License](#MIT-License)
* [Contributing](#Contributing)


## Installation

${data.installation}

## Usage 

${data.usage}


## License 

${data.license}


## Contributing 

${data.contributing}


## Test 

${data.test}


## Question

${data.email}

${data.github}

`;
}

module.exports = generateMarkdown;
