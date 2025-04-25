// function getFormvalue() {
//     //Write your code here

// }
function getFormvalue() {
    // Prevent the default form submission
    event.preventDefault();

    // Access form elements
    const form = document.getElementById("form1");
    const firstName = form.elements["fname"].value.trim();
    const lastName = form.elements["lname"].value.trim();

    // Combine and display full name
    alert(`${firstName} ${lastName}`);
}
