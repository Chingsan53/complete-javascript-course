const airline = "TAP Air Portugal";
const plane = "A230";
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log("B737"[0]);

// Find the length of the string
console.log(airline.length);
console.log("B737".length);

// Find the index of the string
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat!");
  else console.log("You got lucky");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("jonas"));
console.log(typeof new String("jonas"));
console.log(new String("jonas").slice(1));

console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

const passenger = "jOnas";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing Emails
const email = "hello@ching.digital";
const loginEmail = "  Hello@Ching.digital \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// similarly =>
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// replacing
const priceGB = "288,97@";
const priceUS = priceGB.replace("@", "$").replace(",", ".");
console.log(priceUS);
const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll("door", "gate"));

console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane2 = "Airbus A320neo";
console.log(plane2.includes("A320"));
console.log(plane2.includes("Boeing"));
console.log(plane2.startsWith("Air"));

if (plane2.startsWith("Airbus") && plane2.endsWith("neo")) {
  console.log("Part of the new Airbus family");
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun"))
    console.log("You are not allowed to board the aircraft");
  else console.log("Welcome!");
};

checkBaggage("I have a laptop, some food and a pocket knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

// Split

console.log("a+very+nice+string".split("+"));
console.log("Chingsan Ly".split(" "));

const [firstName, lastName] = "Chingsan Ly".split(" ");
console.log(firstName, lastName);
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("Jessica ann smith davis");

// Padding a string
const message = "Go to gate 23!";
console.log(message.padStart(25, "->").padEnd(35, "+"));

// Real world example
const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(439293238239398));
console.log(maskCreditCard(432332323342343));

// Repeat
const message2 = "Bad weathe... All Departure Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"plane".repeat(n)}`);
};
planesInLine(5);
