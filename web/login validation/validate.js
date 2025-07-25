function validate() {
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  if (user === "admin" && pass === "1234") {
    alert("Login successful");
    return true;
  } else {
    alert("Invalid credentials");
    return false;
  }
}
