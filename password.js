// code solution here
if (process.argv.length !== 4) {
  console.error("Wrong number of arguments");
} else {
  // destructuring
  // const [, , ...args] = process.argv
  const length = parseInt(process.argv[2]);
  const numberOfPasswords = parseInt(process.argv[3]);

  // helpers
  const validCharCodes = [
    ...range(48, 57),
    ...range(65, 90),
    ...range(97, 122)
  ];

  function* range(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }

  function generatePassword(length) {
    let codes = [];
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * validCharCodes.length - 1);
      codes.push(validCharCodes[index]);
    }
    return String.fromCharCode(...codes);
  }

  for (let i = 0; i < numberOfPasswords; i++) {
    console.log(generatePassword(length));
  }
}
