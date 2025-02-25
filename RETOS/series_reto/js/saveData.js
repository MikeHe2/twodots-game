document.getElementById('formSeries')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    const series1 = document.getElementById('series1').value;
    const series2 = document.getElementById('series2').value;
    const series3 = document.getElementById('series3').value;

    if (series1 == '0' || series2 == '0' || series3 == '0') {
        alert('Please choose a valid option')
        return;
    }

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('age', age);
    localStorage.setItem('series1', series1);
    localStorage.setItem('series2', series2);
    localStorage.setItem('series3', series3);

    window.location.href = 'registro.html';

    });