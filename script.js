function calculateMoney(ticketSale) {
  if (isNaN(ticketSale)) {
    return "Type a valid number";
  } else if (ticketSale < 0) {
    return "Invalid Number";
  } else {
    const ticketPrice = 120 * ticketSale;
    const coast = 50 * 8 + 500;
    return ticketPrice - coast;
  }
}

function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  } else {
    let text = "";
    for (character of name.toLowerCase().trim()) {
      text = character;
    }
    if (
      text.includes("a") ||
      text.includes("y") ||
      text.includes("i") ||
      text.includes("e") ||
      text.includes("o") ||
      text.includes("u") ||
      text.includes("w")
    ) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  }
}

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Input";
  } else {
    let items = [];
    for (let item of array) {
      if (typeof item === "number" && !isNaN(item)) {
        items.push(item);
      }
    }
    return items;
  }
}

function password(obj) {
  const name = obj.name;
  const birthYear = obj.birthYear;
  const siteName = obj.siteName;

  if (
    typeof name !== "string" ||
    typeof birthYear !== "number" ||
    typeof siteName !== "string"
  ) {
    return "Invalid Input";
  } else if (birthYear.toString().length !== 4) {
    return "Invalid Birth Year";
  } else {
    const firstLetter = siteName.charAt(0).toUpperCase();
    const password = `${firstLetter}${siteName
      .slice(1)
      .toLowerCase()}#${name.toLowerCase()}@${birthYear}`;
    return password;
  }
}

function monthlySavings(array, livingCost) {
  if (!Array.isArray(array) || isNaN(livingCost)) {
    return "Invalid Input";
  } else {
    const cost = livingCost;
    let income = 0;
    for (arr of array) {
      if (arr >= 3000) {
        income += arr - arr * 0.2;
      } else {
        income += arr;
      }
    }
    if (income - cost >= 0) {
      return income - cost;
    } else {
      return "earn more";
    }
  }
}
