function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.addEventListener("DOMContentLoaded", function() {
    const singleUsersButton = document.getElementById("singleUsersButton");
    const businessButton = document.getElementById("businessButton");
    const singleUsersView = document.getElementById("singleUsersView");
    const businessView = document.getElementById("businessView");

    singleUsersButton.addEventListener("click", function() {
        singleUsersButton.classList.add("active");
        businessButton.classList.remove("active");
        singleUsersView.classList.add("active");
        businessView.classList.remove("active");
    });

    businessButton.addEventListener("click", function() {
        businessButton.classList.add("active");
        singleUsersButton.classList.remove("active");
        businessView.classList.add("active");
        singleUsersView.classList.remove("active");
    });
});