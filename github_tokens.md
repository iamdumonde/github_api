## 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

# Second token : `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`

## Jeton d'Accès à l'API
const accesToken = "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";
const apiUrl = "https://api.github.com/users";

## Créer un objet d'en-têtes avec de jeton d'accès
const headers = {
    "Authorisation": `Beerer ${accessToken}`
}

## Effectuez la requête avec les entêtes d'authentification 
fetch(apiUrl, {
    method: "GET",
    headers: (
        "Content-Type": "application/json",
        "Authorization":  'Beerer ${accessToken}'
    )
})