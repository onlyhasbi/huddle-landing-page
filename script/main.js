(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelector(".validate__form");

  // Loop over them and prevent submission
  forms.addEventListener("submit",(e) => {
      e.preventDefault();
      e.stopPropagation();
      if (forms.checkValidity()) {
        forms.classList.remove("invalidated");
      } else {
        forms.classList.add("invalidated");
      }
    },
    false
  );
})();
