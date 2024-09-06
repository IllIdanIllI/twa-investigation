const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, 'src', 'static');
const dest = path.resolve(__dirname, 'build', 'static');

fs.cpSync(src, dest, { recursive: true });