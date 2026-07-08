const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet("Hey")("Tom");
