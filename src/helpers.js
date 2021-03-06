import crypto from 'crypto';

// some helper values
export const BIG_INT = '115792089237316195423570985008687907853269984665640564039457584007913129639935';
export const BIG_INT_MINUS_TWO = '115792089237316195423570985008687907853269984665640564039457584007913129639933';
export const ONE_DAY_IN_SECONDS = 60 * 60 * 24;

export function asyncIterator(data, fn, done) {
  let i = 0;
  function iterate() {
    fn(data[i], () => {
      i++;
      if (i > data.length - 1) {
        done();
      } else {
        iterate();
      }
    });
  }
  iterate();
}

export function randomInt(min, max) {
  const rand = Math.round(Math.random() * max);
  return min + rand;
}

export function randomHex(len, prefix) {
  return `${prefix ? '0x' : ''}${crypto.randomBytes(Math.ceil(len / 2)).toString('hex').slice(0, len)}`;
}

export function randomAddress(prefix) {
  return randomHex(40, prefix);
}

export function currentTimestamp() {
  return parseInt(new Date().getTime() / 1000, 10);
}

export function randomTime(from) {
  return from - (randomInt(0, 8035200));
}
