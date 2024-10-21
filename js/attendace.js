document.addEventListener('DOMContentLoaded', function() {
    const absentCheckboxes = document.querySelectorAll('.absent-col input[type="checkbox"]');
    const missedCols = document.querySelectorAll('.missed-col');

    absentCheckboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                missedCols[index].textContent = parseInt(missedCols[index].textContent) + 1;
            } else {
                missedCols[index].textContent = parseInt(missedCols[index].textContent) - 1;
            }
        });
    });
});