const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
];
if (typeof document !== 'undefined') {
    const title = document.querySelector("#title")
    const hexName = document.querySelector("#sub-title");
}


function randomIndex() {
 const random = Math.floor(darkColorsArr.length * Math.random())
 return random;
};



