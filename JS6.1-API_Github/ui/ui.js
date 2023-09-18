import { dateDiffInDays, deleteCardIf } from '../utilities/utilities.js';

function showUser(user) {
    // Traitez les données de la réponse ici
    const username = user.login; // Nom d'utilisateur
    const userImage = user.avatar_url; // Image de l'utilisateur


    // Affiche d'abord dans la console pour être sûr
    console.log(username);
    console.log(userImage);

    // Mise à jour de l'interface utilisateur
    document.getElementById('username').textContent = `Nom d'utilisateur : ${username}`;
}

export default showUser;
