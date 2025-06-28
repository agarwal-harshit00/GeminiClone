
// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

// import {
//   GoogleGenAI,
// } from '@google/genai';

//   const ai = new GoogleGenAI({
//     apiKey: "AIzaSyA6eTMXFAbMs7q5hlIs_QJXl6t2Ygz8McE", // Use env var in production
//   });

//   const config = {
//     thinkingConfig: {
//       thinkingBudget: -1,
//     },
//     responseMimeType: 'text/plain',
//   };

//   const model = 'gemini-2.5-pro';

// async function main(prompt) {
//     // if(!prompt || prompt.trim()==="") return "";
//     // const safePrompt = typeof prompt === "string" ? prompt.trim() : "";

//   const contents = [
//     {
//       role: 'user',
//       parts: [
//         {
//           text:prompt , // Replace this with your prompt
//         },
//       ],
//     },
//   ];


//     const response = await ai.models.generateContentStream({
//       model,
//       config,
//       contents,
//     });
//     let result="";
//     for await (const chunk of response) {
//       console.log(chunk.text);
//       result +=chunk.text;
//     }

//     return result;
  
// }

//  export default main;

// Install dependencies before running:
// npm install @google/genai mime
// npm install dotenv  // To use .env file for API key

// To run this code:
// 1. npm install @google/genai mime
// 2. Add "type": "module" to your package.json

import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
    apiKey: "AIzaSyA6eTMXFAbMs7q5hlIs_QJXl6t2Ygz8McE", // Set your API key in environment variable
});

async function main(prompt) {
  

  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    responseMimeType: 'text/plain',
  };

  const model = 'gemini-2.5-flash';

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt, // Replace with your prompt
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  
  let result="";
  for await (const chunk of response) {
    console.log(chunk.text);
    result+= chunk.text;
  }
  return result;
}

export default main;
