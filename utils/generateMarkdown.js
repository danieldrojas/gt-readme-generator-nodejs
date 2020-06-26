// function to generate markdown for README




function generateMarkdown(data) {
  let license;
  switch (data.license) {
    case "MIT":
      license = "THIS IS MIT";
      break;
    case "BSA":
      license = "this is bsa"
      break;
    default:
      license = "This is MIT"
      break;
  }
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

${license}


## Contributing 

${data.contribution}


## Test 

${data.test}


## Question

${data.email}

${data.github}

https://github.com/${data.github}

`;
}

module.exports = generateMarkdown;
