function searchStudent() {
    // Get the value entered in the search input
    var searchValue = document.getElementById("searchInput").value;

    // Assume you have a list of students (you may load this from a server)
    var students = [
        { id: '123451', name: 'Chalana Hirushan Nadiranga ', Type: 'Head Prefect', Class: 'Grade 10', phone: '0762598145' ,profilePhoto: 'Prefect1jpg'},
        { id: '123452', name: 'Mesandu Mindula Mihiranga', Type: 'Sub Prefect', Class: 'Grade 11', phone: '076893254' ,profilePhoto: 'Prefect2.jpg' },
        { id: '123453', name: 'Pasindu', Type: 'Sub Prefect', Class: 'Grade 11', phone: '076825694' ,profilePhoto: 'Prefect3.jpg'},
        { id: '123454', name: 'Saranga', Type: 'Prefect', Class: 'Grade 11', phone: '076145684' ,profilePhoto: 'Prefect4.jpg'},
        { id: '123455', name: 'Kamal', Type: ' Prefect', Class: 'Grade 10', phone: '076897524' ,profilePhoto: 'Prefect5.jpg' },
        { id: '123456', name: 'Nimal', Type: 'Prefect', Class: 'Grade 10', phone: '076893254' ,profilePhoto: 'Prefect6.jpg'},
        { id: '123457', name: 'Nimesh', Type: 'Prefect', Class: 'Grade 11', phone: '076893254',profilePhoto: 'Prefect7.jpg' },
        { id: '123458', name: 'Sachin', Type: 'Prefect', Class: 'Grade 10', phone: '076325469',profilePhoto: 'Prefect8.jpg' },
        { id: '123459', name: 'Himath', Type: 'Prefect', Class: 'Grade 11', phone: '076259877',profilePhoto: 'sub Prefect.jpg'},
    // Add more students as needed
        // Add more students as needed
    ];

    // Search for the student with the entered ID
    var result = students.find(student => student.id === searchValue);

    // Display the search result
    var searchResultElement = document.getElementById("searchResult");
    if (result) {
        searchResultElement.innerHTML = `
            <h3>Student Details</h3>
            <div class="profile-info">
            <img src="${result.profilePhoto}" alt="${result.name}'s Profile Photo" width="30px" height="200px">
            <div>
            <table>
                <tr>
                    <th>Informations</th>
                    <th>Description</th>
                </tr>
                <tr>
             
                    <td>Prefect ID</td>
                    <td>${result.id}</td>
                   
                </tr>
                <tr>
                    <td>Name</td>
                    <td>${result.name}</td>
                </tr>
                <tr>
                    <td>Type</td>
                    <td>${result.Type}</td>
                </tr>
                <tr>
                    <td>Class</td>
                    <td>${result.Class}</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>${result.phone}</td>
                </tr>
            </table>
            
        `;
    } else {
        searchResultElement.innerHTML = "<p>No matching student found.</p>";
    }
}














