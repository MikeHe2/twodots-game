// JS to display the user selection

const userName = localStorage.getItem('name');
const email = localStorage.getItem('email');
const age = localStorage.getItem('age');
const series1 = localStorage.getItem('series1');
const series2 = localStorage.getItem('series2');
const series3 = localStorage.getItem('series3');

if (!userName || !email || !age || !series1 || !series2 || !series3) {
    alert('Please fill the form')
    window.location.href = 'index.html'
} else {
    document.getElementById("userData").innerHTML =`
    <p><strong>Name:</strong>${userName}</p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Age:</strong>${age}</p>
    <p><strong>Selection 1:</strong>${series1}</p>
    <p><strong>Selection 2:</strong>${series2}</p>
    <p><strong>Selection 3:</strong>${series3}</p>
    `;
}
