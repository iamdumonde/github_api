// Jeton d'Accès à l'API
const accessToken = "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";
const apiUrl = "https://api.github.com/users/iamdumonde";

// Créer un objet d'en-têtes avec de jeton d'accès
const headers = {
    "Authorization": `Bearer ${accessToken}`
};

// Effectuez la requête avec les en-têtes d'authentification

// fetch(apiUrl, {headers})
//     .then(response => response.json())
//     .then(data => {
//         // Traitez les données de la réponse ici 
//         const username = data.login; // Nom d'utilisateur
//         const avatarUrl = data.avatar_url; // URL de la photo de profil
//         const followers = data.followers; // Le nombre de followers
//         const following = data.following; // Le nombre de following

//         // Affiche les informations dans la console
//         console.log(`Nom d'utilisateur : ${username}`);
//         console.log(`URL de la photo de profil : ${avatarUrl}`);
//         console.log(data);

//         // Met à jour l'interface utilisateur
//         document.getElementById('username').textContent = `Nom d'utilisateur : ${username}`;
//         document.getElementById('followers').textContent = `Nombre de followers : ${followers}`;
//         document.getElementById('following').textContent = `Nombre de following : ${following}`;
//         document.getElementById('avatar').src = avatarUrl;
        
//     })
//     .catch(error => {
//         console.error("Une erreur s'est produite : " . error);
//     });



// **************************************Utilisation async/await************************************* //

// async function fetchData(){
//     try {
//         const response = await fetch(apiUrl, {headers});
//         const data = await response.json();

//         //Traitement des données
//         console.log(data);

//     }
//     catch(error){
//         //Gérez ici les erreurs éventuelles
//         console.error('Une erreur s\est produite : ' , error);
//     }
// }
// //Appel de la fonction
// fetchData();


// ********************************Utilisation de .then() et .catch()******************************** //
// function fetchBooks(){
//     fetch(apiUrl, {headers})
//         .then(response => {
//             if (!response.ok){
//                 throw new Error('Erreur de réseau :' + response.status);
//             }
//             return response.json();
//         })
//         .then(data => {
//             //Traitez ici les données renvoyées (par exemple, affichez-les dans la console)
//             console.log(data);
//         })
//         .catch(error => {
//             // Gérez ici les erreurs éventuelles
//             console.error('Une erreur s\est produite : ', error);
//         })
// }

// //Appelez la fonction pour récupérer les livres
// fetchBooks();


// ************************************Utilisation d'async/await************************************ //
async function fetchBooks(){
    try {
        const response = await fetch(apiUrl, {headers});
        if (!response.ok){
            throw new Error('Erreur de réseau : ' + response.status);
        }
        const data = await response.json();

        // Traitez ici les données renvoyées (par exemple, affichez-les dans la console)
        console.log(data);
    }
    catch (error){
        //Gérez ici les erreurs éventuelles
        console.error('Une erreur s\'est produite : ', error);
    }
}
//Appelez la fonction pour récupérer les livres
fetchBooks();


//
async function getData3(){
    await attente(5000); //attente 5s
    console.log("1- recherche des données");
    await attente(3000); //attendre 1s
    console.log("2- traitement des données");
    await attente(2000); //attendre 2s
    console.log("3- Utilisation des données");
}

getData3();
