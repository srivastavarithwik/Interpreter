import fs from "fs";

const args = process.argv.slice(2); // Skip the first two arguments (node path and script path)

if (args.length < 2) {
  console.error("Usage: ./your_program.sh tokenize <filename>");
  process.exit(1);
}

const command = args[0];

if (command !== "tokenize") {
  console.error(`Usage: Unknown command: ${command}`);
  process.exit(1);
}

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.error("Logs from your program will appear here!");

const filename = args[1];

const fileContent = fs.readFileSync(filename, "utf8");

const Parenthesis = (fileContent) =>{
  let token = '';
  let isError = false;
  
    let lines = fileContent.split("\n");
  for (const line of lines) {
    for (const [index, line] of lines.entries()) {
      for (const ch of line) {
        if (ch == '(') {
          token += 'LEFT_PAREN ( null\n';
        }
        else if (ch == ')') {
          token += 'RIGHT_PAREN ) null\n';
        }
        else if (ch == '{') {
          token += 'LEFT_BRACE { null\n';
        }
        else if (ch == '}') {
          token += 'RIGHT_BRACE } null\n';
        }
        else if (ch == '.') {
          token += 'DOT . null\n';
        }
        else if (ch == ',') {
          token += 'COMMA , null\n';
        }
        else if (ch == ';') {
          token += 'SEMICOLON ; null\n';
        }
        else if (ch == '+') {
          token += 'PLUS + null\n';
        }
        else if (ch == '-') {
          token += 'MINUS - null\n';
        }
        else if (ch == '*') {
          token += 'STAR * null\n';
        }
        else if (ch == '/') {
          token += 'SLASH / null\n';
        }
        else {
          console.error(`[line ${index + 1}] Error: Unexpected character: ${ch}`);
          isError = true;
      }
    }
  }
}
 token += "EOF  null"
 console.log(token);
 if (isError) {
  process.exit(65)
 }
}

if (fileContent.length !== 0) {
 Parenthesis(fileContent);
} 

else {
  console.log("EOF  null");
}
