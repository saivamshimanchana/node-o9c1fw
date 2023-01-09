let num = 100;

for (i = 1; i <= num; i = i + 1) {
  if (i % 3 !== 0) {
    console.log('google');
  } else if (i % 5 === 0) {
    console.log('facebook');
  } else if (i % 5 === 0 && i % 3 === 0) {
    console.log('amazon');
  } else {
    console.log(i);
  }
}
