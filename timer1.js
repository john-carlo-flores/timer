const beepAt = (seconds) => {

  if (isNaN(seconds) || seconds < 0) return;

  setTimeout(() => {
    process.stdout.write('\x07');
  }, seconds * 1000);
};

const alarms = process.argv.slice(2);

alarms.forEach(alarm => beepAt(alarm));