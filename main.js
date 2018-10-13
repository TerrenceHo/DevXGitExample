console.log("Hi");

console.log("DevX is the best club at UCLA");
for (let i = 1; i < 6; i++) {
  let place = "th";
  if (i === 1) place = "st";
  if (i === 2) place = "nd";
  if (i === 3) place = "rd";

  console.log("DevX is the " + i + place + " best club at UCLA");
}
