// 1. Select HTML elements
const noteForm = document.getElementById("noteForm");
const noteInput = document.getElementById("noteInput");
const notesContainer = document.getElementById("notesContainer");


// 2. Create notes array
let notes = [];


// 19. Save notes function
function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}


// 19. Render notes function
function renderNotes() {
    notesContainer.innerHTML = "";

    // 12. Loop through notes
    notes.forEach(function(note) {

        // 13. Create elements
        const noteElement = document.createElement("div");
        const noteText = document.createElement("p");
        const deleteButton = document.createElement("button");


        // 14. Insert text
        noteText.textContent = note;
        deleteButton.textContent = "Delete";


        // 15. Add CSS classes
        noteElement.classList.add("note");
        deleteButton.classList.add("delete-btn");


        // 16. Append elements
        noteElement.appendChild(noteText);
        noteElement.appendChild(deleteButton);
        notesContainer.appendChild(noteElement);


        // 17. Delete individual note
        deleteButton.addEventListener("click", function() {
            notes = notes.filter(function(item) {
                return item !== note;
            });

            // 18. Update localStorage
            saveNotes();

            // Remove from page
            noteElement.remove();
        });

    });

}

// 20. Load notes when page starts
function loadNotes() {

    // 9. Get saved notes
    const savedNotes = localStorage.getItem("notes");

    // 11. Check if notes exist
    if (savedNotes) {

        // 10. String → Array
        notes = JSON.parse(savedNotes);

    }

    renderNotes();
}


// 3. Form submission
noteForm.addEventListener("submit", function(event) {
    // 4. Prevent page refresh
    event.preventDefault();

    // 5. Get input value
    const noteText = noteInput.value;

    // Prevent empty notes
    if (noteText.trim() === "") {
        return;
    }

    // 6. Add note to array
    notes.push(noteText);

    // 7 & 8. Save array to localStorage
    saveNotes();

    // Update page
    renderNotes();

    // Clear input
    noteInput.value = "";

});


// Load notes when application starts

loadNotes();