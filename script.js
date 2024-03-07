function getIpInfo() {
    var ipAddress = document.getElementById('ipAddress').value;
    var url = `https://ipinfo.io/${ipAddress}/json`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var infoDiv = document.getElementById('info');
            infoDiv.innerHTML = `
                <p><strong>IP Address:</strong> ${data.ip}</p>
                <p><strong>Hostname:</strong> ${data.hostname}</p>
                <p><strong>City:</strong> ${data.city}</p>
                <p><strong>Region:</strong> ${data.region}</p>
                <p><strong>Country:</strong> ${data.country}</p>
                <p><strong>Location:</strong> ${data.loc}</p>
                <p><strong>Organization:</strong> ${data.org}</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
