// === FROM ===
// &release_date.gte=2018-08-01
// === TO ===
// &release_date.lte=2018-08-24

function twoDigits(type) {
  const result = `0${type}`.slice(-2);
  console.log(result);
  return result;
}
function calcLastMonth(currentMonth) {
  // If January return December
  if (currentMonth === 1) {
    return 12;
  }
  return currentMonth - 1;
}

const today = new Date();
let month = today.getMonth() + 1; // January is 0!
let day = today.getDate();
const year = today.getFullYear();

let lastMonth = calcLastMonth(month);

// === Transform # into ## ===
lastMonth = twoDigits(lastMonth);
month = twoDigits(month);
day = twoDigits(day);

// === Format Dates
const todaysDate = `${year}-${month}-${day}`;
const lastMonthsDate = `${year}-${lastMonth}-01`;

// === Output NowPlaying API Parameter
const dateRange = `release_date.gte=${lastMonthsDate}&release_date.lte=${todaysDate}`;

export default dateRange;
