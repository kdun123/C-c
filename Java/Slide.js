let counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

function toggleNavigation() {
    const navigation = document.getElementById('navigation-auto');
    if (navigation.style.display === "none" || navigation.style.display === "") {
        navigation.style.display = "flex";
    } else {
        navigation.style.display = "none";
    }
}
