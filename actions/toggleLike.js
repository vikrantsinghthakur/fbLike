const TRUE='true';
const FALSE='false';

export function setTrue(value) {
  return {
    type: value.stat
  }
}

export function setFalse() {
  return {
    type: FALSE
  }
}