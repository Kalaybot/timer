process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

process.stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  } else {
    console.log('Input:', key);
  }
  if  (key === 'b') {
    console.log('Beep after 1 second.');
    process.stdout.write('\x07');
  }

  if (key >= 1 && key <= 9) {
    const seconds = key;
    console.log(`Setting timer for ${seconds} seconds...`);
    setTimeout(() => {
      console.log('Beep!');
      process.stdout.write('\x07');
    }, seconds * 1000);
  }
});

console.log("Press 'b' to beep immediately or press a number (1-9) to set a timer. Press Ctrl + C to exit.");