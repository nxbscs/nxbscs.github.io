const feet = document.getElementById("feet");
const meters = document.getElementById("meters");

feet.addEventListener("input", () => {

    if (feet.value === "") {
        meters.value = "";
        return;
    }

    const result = Number(feet.value) * 0.3048;

    meters.value = result.toFixed(4);

});