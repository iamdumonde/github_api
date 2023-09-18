

async function getUser(username) {
    // Jeton d'Accès à l'API
    const accessToken = "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";
    const apiUrl = `https://api.github.com/users/${username}`;
    
    // Créer un objet d'en-têtes avec de jeton d'accès
    const headers = {
        "Authorization": `Bearer ${accessToken}`
    }

    const response = await fetch(apiUrl, {headers});
    const data = await response.json();
    return data;
	

}

export default getUser;
