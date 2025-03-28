const fs = require('fs');
const dotenv = require('dotenv');

const env = process.argv[2] || 'production';
const envPath = `.env.${env}`;
const parsed = dotenv.parse(fs.readFileSync(envPath));

// Generate config.js
const configLines = Object.entries(parsed).map(
  ([key, value]) => `  window.${key} = "${value}";`
);
const configContent = `(function () {\n${configLines.join('\n')}\n})();\n`;
fs.writeFileSync('config.js', configContent);
console.log(`✅ Generated config.js from ${envPath}`);

// Generate env.d.ts
const typeLines = Object.keys(parsed).map(
  (key) => `    ${key}: string;`
);
const typesContent = `export {};\n\ndeclare global {\n  interface Window {\n${typeLines.join('\n')}\n  }\n}\n`;

const typeOutputPath = 'src/types/env.d.ts';
fs.mkdirSync('src/types', { recursive: true });
fs.writeFileSync(typeOutputPath, typesContent);
console.log(`✅ Generated TypeScript types at ${typeOutputPath}`);
