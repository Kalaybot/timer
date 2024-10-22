const args = process.argv.slice(2);

for (let arg of args) {
  const time = Number(arg);

  if (time > 0 && !isNaN(time)) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`Beep after ${time} seconds!`);
    }, time * 1000);
  }
}