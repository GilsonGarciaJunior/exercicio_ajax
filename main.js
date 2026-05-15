document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.getElementById('name');
    const usernameElement = document.getElementById('username');
    const avatarElement = document.getElementById('avatar');
    const reposElement = document.getElementById('repos');
    const followersElement = document.getElementById('followers');
    const followingElement = document.getElementById('following');

    const endpoint = 'https://api.github.com/users/GilsonGarciaJunior';

    fetch(endpoint)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro ao buscar dados do GitHub');
            }
            return response.json();
        })
        .then((json) => {
            avatarElement.src = json.avatar_url;
            nameElement.innerText = json.name;
            usernameElement.innerText = `@${json.login}`;
            reposElement.innerText = json.public_repos;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            link.href = json.html_url;
        })
        .catch((error) => {
            console.error(error);
            nameElement.innerText = 'Erro ao carregar';
        });
})