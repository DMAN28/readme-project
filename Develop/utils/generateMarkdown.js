// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  https://github.com/${data.Username}/${data.Title}
  # Description: 
  ${data.Description}
  # Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Testing](#testing)
  *[Questions](#questions)
  # Installation
  The following dependencies are required to run this application: ${data.Installation}
  # Usage
  In order to use this app, ${data.Usage}
  # License
  This project is licensed under the ${data.license}
  !{GitHub license} 
  # Contributing
  Contributors: ${data.contributing} 
  # Test 
  The following is needed to run the test: ${data.Tests}
  # Questions 
If you have any questions fee free to reach out ${data.Username} or at : ${data.Email}.

`
}

module.exports = generateMarkdown;
