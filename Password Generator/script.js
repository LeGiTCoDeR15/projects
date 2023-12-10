let point = document.getElementById("points");
let value = document.getElementById("value");
let pass = document.getElementById("pass");
let check1 = document.getElementById("box1");
let check2 = document.getElementById("box2");
let check3 = document.getElementById("box3");
let check4 = document.getElementById("box4");
let color = document.querySelector(".col");
let copy = document.querySelector("#cop");
let cele = document.querySelector(".copied");



// Initial update of the value
value.innerHTML = point.value;

// Add an event listener to the range input
point.addEventListener("input", function () {
    value.innerHTML = point.value;
});

let password_copy;

function pw(){

let includeLowercase = false;
let includeUppercase = false;
let includeNumbers = false;
let includeSymbols = false;



if (check1.checked) {
    includeUppercase = true;
}
if (check2.checked) {
    includeLowercase = true;
}
if (check3.checked) {
    includeNumbers = true;
}
if (check4.checked) {

    includeSymbols = true;
}




const passwordLength = point.value;

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    // Define character sets for each option
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_-+=<>?';


    if(includeLowercase && includeNumbers && includeUppercase && includeSymbols){
        color.classList.add("grn");
        color.classList.add("active");
        color.classList.remove("red");
    }
    else{
        color.classList.add("red");
        color.classList.add("active");
        color.classList.remove("grn");

    }

    // Create a character set based on selected options
    let charSet = '';
    if (includeUppercase) charSet += uppercaseChars;
    if (includeLowercase) charSet += lowercaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;

    if (charSet.length === 0) {
        return 'Please select at least one character set.';
    }

    // Generate the password
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    return password;
}

// Example usage:
// Change this to your desired password length
const newPassword = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);

password_copy = newPassword;
pass.innerHTML = newPassword;

}

// Get the copy icon element by its ID or other means
const copyIcon = document.getElementById("cop");

// Add a click event listener to the copy icon
copyIcon.addEventListener("click", function () {
  const textToCopy = password_copy;

  // Create a temporary textarea element
  const textArea = document.createElement("textarea");
  textArea.value = textToCopy;

  // Make the text area invisible
  textArea.style.position = "fixed";
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.opacity = 0;

  document.body.appendChild(textArea);

  textArea.select();

  try {
    document.execCommand("copy");
    console.log("Text copied to clipboard");
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }

  document.body.removeChild(textArea);
});

copy.addEventListener('click', ()=>{
    cele.classList.add("active");
})
