function dayOfTheWeek(daynum) {
  switch (daynum) {
    case 1:
      console.log(`day number ${daynum} ==>Monday`);

      break;
    case 2:
      console.log(`day number ${daynum} ==>Tuesday`);
      break;
    case 3:
      console.log(`day number ${daynum} ==>Wensday`);
      break;
    case 4:
      console.log(`day number ${daynum} ==>Thurday`);
      break;
    case 5:
      console.log(`day number ${daynum} ==>Friday`);
      break;
    case 6:
      console.log(`day number ${daynum} ==>Satarday`);
      break;
    case 7:
      console.log(`day number ${daynum} ==>sunday`);
      break;

    default:
      console.log(` invalid Output day number ${daynum} `);
      break;
  }
}
dayOfTheWeek(1);
dayOfTheWeek(7);
dayOfTheWeek(9);
dayOfTheWeek(null);
dayOfTheWeek(NaN);
dayOfTheWeek(-2);
dayOfTheWeek(0);
