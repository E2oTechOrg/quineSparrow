fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-container").innerHTML = data;
    // Once navbar is loaded, initialize active link setup
    setActiveNavLinkByUrl();
    setupScrollSpy();
  })
  .catch((error) => console.error("Error loading navbar:", error));
  
  fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
    // Once navbar is loaded, initialize active link setup
    setActiveNavLinkByUrl();
    setupScrollSpy();
  })
  .catch((error) => console.error("Error loading navbar:", error));
  