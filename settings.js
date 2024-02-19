function uploadProfilePicture() {
    const profilePictureInput = document.getElementById('profilePictureInput');
    const preview = document.getElementById('profilePicturePreview');

    const file = profilePictureInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;
            preview.innerHTML = '';
            preview.appendChild(img);
        };

        reader.readAsDataURL(file);
    }
}

function updateName() {
    
    const nameInput = document.getElementById('nameInput');
    const newName = nameInput.value;
    alert('Name updated successfully: ' + newName);
}

function changePassword() {
    
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    alert('Password changed successfully');
}

function reportIssue() {
   
    const issueDescription = document.getElementById('issueDescription').value;
    alert('Issue reported successfully:\n' + issueDescription);
}
