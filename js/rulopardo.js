
// Primero definimos la función
const fetchActorDetails = async (imdbID) => {
    const apiKey = '2747e7e0'; // Reemplaza con tu API Key de OMDb
    const url = `https://www.omdbapi.com/?i=${encodeURIComponent(imdbID)}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const text = await response.text();  // Obtener la respuesta como texto

        // Verificar si la respuesta es JSON
        try {
            const data = JSON.parse(text);  // Intentar parsear el texto como JSON
            if (data.Response === "True") {
                console.log(data);  // Aquí ya puedes trabajar con los datos parseados
            } else {
                console.log('Error en la respuesta: ', data.Error);
            }
        } catch (jsonError) {
            console.error('Error al parsear JSON:', jsonError, text);  // Si la respuesta no es JSON válido
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);  // Si hay un problema con la solicitud
    }
};

// Después llamamos a la función
fetchActorDetails('nm1407539');

