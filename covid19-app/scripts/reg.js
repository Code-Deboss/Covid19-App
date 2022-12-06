document.querySelector("#regform").addEventListener("submit", (e) => {
 e.preventDefault();

  const formData = new FormData(e.target);

  const fullname = formData.get("fullname");
  const email = formData.get("email");
  const password = formData.get("psw");

  const user = { fname: fullname, eml: email, psw: password };

  if (localStorage.getItem("user") === null) {
    localStorage.setItem("user", JSON.stringify(user));

    Swal.fire({
      position: "top-end",
      icon: "success",
      // title: "Success",
      text: "Your account has been created successfully",
      showConfirmButton: false,
      timer: 3000,
    });

    setTimeout(() => {
      window.history.replaceState(null, null, window.location.pathname);
      
      window.location.replace("../login.html");
    }, 900);

  }else{
    Swal.fire({
        position: "top-end",
        icon: "info",
        // title: "Success",
        text: "An account already exists",
        showConfirmButton: false,
        timer: 3000,
      });
  }
});
