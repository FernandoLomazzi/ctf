const form = document.createElement('form');
form.method = 'POST';
form.enctype = 'multipart/form-data';
form.action = '/profile'; 

const usernameDiv = document.createElement('div');
usernameDiv.className = 'mb-3';
const usernameLabel = document.createElement('label');
usernameLabel.className = 'form-label';
usernameLabel.textContent = 'Nombre de usuario';
const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.className = 'form-control';
usernameInput.value = 'hacklab';
usernameInput.readOnly = true;
usernameDiv.appendChild(usernameLabel);
usernameDiv.appendChild(usernameInput);

const emailDiv = document.createElement('div');
emailDiv.className = 'mb-3';
const emailLabel = document.createElement('label');
emailLabel.className = 'form-label';
emailLabel.textContent = 'Email';
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.className = 'form-control';
emailInput.value = 'hacklab@utn.edu.ar';
emailInput.readOnly = true;
emailDiv.appendChild(emailLabel);
emailDiv.appendChild(emailInput);

const bioDiv = document.createElement('div');
bioDiv.className = 'mb-3';
const bioLabel = document.createElement('label');
bioLabel.className = 'form-label';
bioLabel.textContent = 'Bio';
const bioTextarea = document.createElement('textarea');
bioTextarea.className = 'form-control';
bioTextarea.id = 'bio';
bioTextarea.name = 'bio';
bioTextarea.rows = 3;
bioTextarea.textContent = 'None';
bioDiv.appendChild(bioLabel);
bioDiv.appendChild(bioTextarea);

const profilePicDiv = document.createElement('div');
profilePicDiv.className = 'mb-3';
const profilePicLabel = document.createElement('label');
profilePicLabel.className = 'form-label';
profilePicLabel.textContent = 'Cambiar imagen de perfil';
const profilePicInput = document.createElement('input');
profilePicInput.type = 'file';
profilePicInput.className = 'form-control';
profilePicInput.id = 'profile_pic';
profilePicInput.name = 'profile_pic';
profilePicInput.accept = 'image/*';
profilePicDiv.appendChild(profilePicLabel);
profilePicDiv.appendChild(profilePicInput);

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.className = 'btn btn-primary w-100';
submitButton.textContent = 'Update Profile';

form.appendChild(usernameDiv);
form.appendChild(emailDiv);
form.appendChild(bioDiv);
form.appendChild(profilePicDiv);
form.appendChild(submitButton);

document.body.appendChild(form);

const fileInput = profilePicInput;

async function fetchImageAsFile(url, fileName) {
    const response = await fetch(url);
    const blob = await response.blob();
    return new File([blob], fileName, { type: blob.type });
}

fetchImageAsFile('https://i0.wp.com/puppis.blog/wp-content/uploads/2022/02/abc-cuidado-de-los-gatos-min.jpg', 'image.jpg')
    .then((myFile) => {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(myFile);
        fileInput.files = dataTransfer.files;

        form.submit();
    })
    .catch((error) => {
        console.error('Error fetching image:', error);
    });
