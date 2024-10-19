window.location = "/profile";
const fileInput = document.getElementById('profile_pic');

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

        // Submit the form after setting the file
        document.getElementsByTagName('form')[0].submit();
    })
    .catch((error) => {
        console.error('Error fetching image:', error);
    });
