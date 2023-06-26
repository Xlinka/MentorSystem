window.onload = function() {
    document.getElementById('ticket-form').addEventListener('submit', function(event) {
        event.preventDefault();
        submitTicket();
    });
}

function submitTicket() {
    // Get form data
    var name = document.getElementById('name').value;
    var category = document.getElementById('category').value;
    var description = document.getElementById('description').value;

    // Log data to console for testing
    console.log('Name:', name);
    console.log('Category:', category);
    console.log('Description:', description);

    // Clear form
    document.getElementById('ticket-form').reset();

    // TODO: Add code here to handle the ticket (e.g., send it to a server)
}
