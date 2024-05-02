#!/usr/bin/env node

// Require Node.js modules
const fs = require('fs');

// Require third-party modules
const projectStructure = {
    "src": ['index.js'],
    "public": ['index.html', 'style.css']
};

Object.entries(projectStructure).forEach(([dir, files]) => {
    
    // Create directory and files
    fs.mkdirSync(dir, { recursive: true });
    files.forEach(file => fs.writeFileSync(`${dir}/${file}`, ''));
});

console.log('Project structure created successfully!');