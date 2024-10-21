function generateAttendanceRow(name, status) {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const statusCell = document.createElement('td');

    nameCell.textContent = name;
    statusCell.textContent = status;

    row.appendChild(nameCell);
    row.appendChild(statusCell);

    return row;
}

function updateAttendanceTable(attendance) {
    const tableBody = document.querySelector('#attendance-table');

    tableBody.innerHTML = '';

    attendance.forEach(student => {
        const row = generateAttendanceRow(student.name, student.status);
        tableBody.appendChild(row);
    });
}

function onScanSuccess(decodeText, decodeResult) {
    // Take attendance logic here
    console.log("Attendance taken for:", decodeText);

    // Generate attendance table rows
    const attendance = [
        { name: 'John Doe', status: 'Present' },
        { name: 'Jane Doe', status: 'Absent' },
        // Add more students here
    ];

    updateAttendanceTable(attendance);

    // Hide the loading indicator
    const loading = document.querySelector('.loading');
    loading.style.display = 'none';

    // Generate new page
    const attendanceReport = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Attendance Report</title>
            <link rel="stylesheet" href="/Dashbord/style.css">
            <script src="https://kit.fontawesome.com/a07605399.js"></script>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="index.css">
        </head>
        <body>
            <header class="header" style="float: right;">
                <!-- Header content here -->
            </header>
            <main class="main" >
                <div class="container">
                    <h1>Attendance Report</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Attendance Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${attendance.map(student => `
                                <tr>
                                    <td>${student.name}</td>
                                    <td>${student.status}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </main>
        </body>
        </html>
    `;

    // Replace the current page with the new page
    document.open();
    document.write(attendanceReport);
    document.close();
}

function onScanError(error) {
    console.error("Scanning error:", error);

    // Show the loading indicator
    const loading = document.querySelector('.loading');
    loading.style.display = 'none';
}

function onScanComplete() {
    console.log("Scanning complete");

    // Show the loading indicator
    const loading = document.querySelector('.loading');
    loading.style.display = 'none';
}

function onScanStart() {
    console.log("Scanning started");

    // Show the loading indicator
    const loading = document.querySelector('.loading');
    loading.style.display = 'block';
}

domReady(function() {
    const qrCodeScanner = new Html5QrcodeScanner(
        "my-qr-reader",
        {
            fps: 10,
            qrbos: 250
        }
    );

    qrCodeScanner.render(onScanSuccess, onScanError, onScanComplete);

    // Add event listeners for the scanner
    qrCodeScanner.addEventListener('start', onScanStart);
});