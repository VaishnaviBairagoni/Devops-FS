function showMessage() {
  let name = document.getElementById("nameInput").value;
  let output = document.getElementById("output");

  if (name === "") {
    output.textContent = "Please enter your name!";
    output.style.color = "red";
  } else {
    output.textContent = "Hello, " + name + "! 👋";
    output.style.color = "green";
  }
}
