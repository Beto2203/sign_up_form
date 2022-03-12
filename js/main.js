
const create = document.querySelector("#create");
const pass = document.querySelector("#pass");
const confirmPass = document.querySelector("#confirmPass");
const noMatch = document.querySelector("#passNotMatch");
const form = document.querySelector("form");


form.addEventListener("submit", (e) => {
    if (pass.value !== confirmPass.value) {
        pass.setCustomValidity("The passwords do not match");
        pass.reportValidity();
        e.preventDefault();
    }
});

for (let item of [pass, confirmPass]){
    item.addEventListener("input", () => {
        pass.setCustomValidity("");
        if (pass.value !== confirmPass.value && confirmPass.value !== ""){
            noMatch.classList.remove("hidden");
            pass.classList.add("invalid");
            confirmPass.classList.add("invalid");
        }
        else {
            noMatch.classList.add("hidden");
            pass.classList.remove("invalid");
            confirmPass.classList.remove("invalid");
        }
    });
}