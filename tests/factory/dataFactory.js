function giveHourAndMinute() {
  return {
    hour: Math.floor(Math.random() * 24),
    minute: Math.floor(Math.random() * 60),
  };
}

function giveInvalidHourAndMinute() {
  return {
    hour: Math.floor(Math.random() * 24) + 24,
    minute: Math.floor(Math.random() * 60) + 59,
  };
}

function giveNegativeNumber() {
  return Math.floor((Math.random() * -100) - 0.1);
}

function giveDecimalNumber() {
  return (Math.random() * 100) + 0.1;
}

function giveRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

const factory = {
  giveHourAndMinute,
  giveInvalidHourAndMinute,
  giveNegativeNumber,
  giveDecimalNumber,
  giveRandomString
};

export default factory;
