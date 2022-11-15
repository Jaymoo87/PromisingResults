//-----Promise Chaining-----//

// slowMath
//   .add(6, 2)
//   .then((eight) => {
//     console.log(`The sum of 6 and 2 is ${eight}.`);
//     return slowMath.multiply(eight, 2);
//   })
//   .then((sixteen) => {
//     console.log(`The product of 8 and 2 is ${sixteen}.`);
//     return slowMath.divide(sixteen, 4);
//   })
//   .then((four) => {
//     console.log(`The dividend of 16 and 4 is ${four}.`);
//     return slowMath.subtract(four, 3);
//   })
//   .then((one) => {
//     console.log(`The difference of 4 and 3 is ${one}.`);
//     return slowMath.add(one, 98);
//   })
//   .then((ninetynine) => {
//     console.log(`The sum of 1 and 98 is ${ninetynine}.`);
//     return slowMath.remainder(ninetynine, 2);
//   })
//   .then((one) => {
//     console.log(`The remainder of 99 divided by 2 is ${one}.`);
//     return slowMath.multiply(one, 50);
//   })
//   .then((fifty) => {
//     console.log(`The product of 1 and 50 is ${fifty}`);
//     return slowMath.remainder(fifty, 40);
//   })
//   .then((ten) => {
//     console.log(`The remainder of 50 divided by 40 is ${ten}.`);
//     return slowMath.add(ten, 32);
//   })
//   .then((fortytwo) => {
//     console.log(`The sum of 10 and 32 is ${fortytwo}.`);
//   })
//   .catch((err) => {
//     console.log(`Back to the drawing board imbecile!`);
//     console.log(new Error(err));
//   });

async function doMath() {
  try {
    let answer = await slowMath.add(6, 2);
    console.log(`The sum of 6 and 2 is ${answer}.`);

    answer = await slowMath.multiply(answer, 2);
    console.log(`The product of 8 and 2 is ${answer}.`);

    answer = await slowMath.divide(answer, 4);
    console.log(`The dividend of 16 and 4 is ${answer}.`);

    answer = await slowMath.subtract(answer, 3);
    console.log(`The difference of 4 and 3 is ${answer}.`);

    answer = await slowMath.add(answer, 98);
    console.log(`the sum of 1 and 98 is ${answer}.`);

    answer = await slowMath.remainder(answer, 2);
    console.log(`The remainder of 99 divided by 2 is ${answer}.`);

    answer = await slowMath.multiply(answer, 50);
    console.log(`The product of 1 and 50 is ${answer}.`);

    answer = await slowMath.remainder(answer, 40);
    console.log(`The remainder of 50 divided by 40 is ${answer}.`);

    answer = await slowMath.add(answer, 32);
    console.log(
      `Ten plus 32 is ${answer}. Something about a Hitchhiker, some guide, and a towel.`
    );
  } catch (err) {
    console.log(err);
  }
}
doMath();
