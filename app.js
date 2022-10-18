let getColor = document.querySelector("#get-color");
let result = document.querySelector("#result");
let shirtOverlay = document.querySelector(".mabel-shirt");
let chosenColor = "";
let liItems = document.querySelectorAll("li");

const availableColors = [
  "Antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgreen",
  "darkgrey",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkslategrey",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dimgrey",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "fuschia",
  "gainsboro",
  "ghostwhite",
  "gold",
  "goldenrod",
  "gray",
  "green",
  "greenyellow",
  "grey",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgray",
  "lightgreen",
  "lightgrey",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightslategrey",
  "lightsteelblue",
  "lightyellow",
  "lime",
  "limegreen",
  "linen",
  "magenta",
  "maroon",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "navy",
  "oldlace",
  "olive",
  "olivedrab",
  "orange",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "pink",
  "plum",
  "powderblue",
  "purple",
  "red",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "seashell",
  "sienna",
  "silver",
  "skyblue",
  "slateblue",
  "slategray",
  "slategrey",
  "snow",
  "springgreen",
  "steelblue",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "wheat",
  "white",
  "whitesmoke",
  "yellow",
  "yellowgreen",
];

// Sort array if new options are added
let sortedColors = availableColors.sort();

// getColor.addEventListener("keyup", (e) => {
getColor.addEventListener("keyup", (e) => {
  removeElements();

  for (let i of sortedColors) {
    if (
      // Check input isn't empty, and match is possible
      i.toLowerCase().startsWith(getColor.value.toLowerCase()) &&
      getColor.value != ""
    ) {
      // Create list with available matches
      let autoItem = document.createElement("li");
      autoItem.classList.add("auto-items");
      autoItem.style.cursor = "pointer";
      autoItem.setAttribute("onclick", "displayColors('" + i + "')");

      let matchedWord = "<b>" + i.substr(0, getColor.value.length) + "<b>";
      matchedWord += i.substr(getColor.value.length);

      console.log(matchedWord);

      // // Show array of all matches
      autoItem.innerHTML = matchedWord;
      document.querySelector(".list").appendChild(autoItem);
    }
  }

  if (e.code === "Enter") {
    shirtOverlay.style.fill = getColor.value;
    e.preventDefault();
  }
});

const displayColors = (value) => {
  getColor.value = value;
  removeElements();
};

const removeElements = () => {
  // Remove elements as needed
  let items = document.querySelectorAll(".auto-items");

  items.forEach((item) => {
    item.remove();
  });
};
