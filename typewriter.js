
const typewriter = () => {
  const sentence = "hello there from lighthouse labs";
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, 5000);
  }
};

typewriter();




 