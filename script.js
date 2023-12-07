// Get the user data
const userData = [
    {name: 'User1', email: 'user1@example.com'},
    {name: 'User2', email: 'user2@example.com'},
    // ...
];

// Function to display users in the table
function displayUsers(users) {
    const table = document.getElementById('userTable');
    table.innerHTML = ''; // Clear the table before adding new rows
    users.forEach(user => {
        const row = table.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
        cell1.textContent = user.name;
        cell2.textContent = user.email;
    });
}

// Function to search for users
function searchUsers() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filteredUsers = userData.filter(user => user.name.toLowerCase().includes(searchInput));
    displayUsers(filteredUsers);
}

// Function to sort users by name
function sortUsers() {
    return userData.sort((a, b) => a.name.localeCompare(b.name));
}

// Event to search for users when the value of the search field changes
document.getElementById('search').addEventListener('input', searchUsers);

// Get the clear button
const clearButton = document.getElementById('clearButton');

// Add event listener to the clear button
clearButton.addEventListener('click', () => {
    // Clear the search input
    const searchInput = document.getElementById('search');
    searchInput.value = '';

    // Display all users
    displayUsers(userData);
});