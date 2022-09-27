const sentence = "hello there from lighthouse labs";

let timer = 0;
for (let i = 0; i < sentence.length; i++) {
  let char = sentence[i];
  if (sentence.length - 1 === i) {
    char += '\n';
  }
  setTimeout(() => process.stdout.write(char), timer);
  timer += 50;
}

