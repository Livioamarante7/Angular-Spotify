export const environment = {
  production: true
};

export const SpotifyConfiguration = {
  clientId: '870690e70b7843a49835df74a5948768',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
   scopes: [
    "user-read-currently-playing", //musica tocando agora.
    "user-read-recently-played", //ler musicas tocadas recentemente
    "user-read-playback-state", //ler estado do player do usuario
    "user-top-read", //top artitas e musicas do usuario
    "user-modify-playback-state", //alterar do player do usuário.
    "user-library-read", //ler bibliotecas dos usuários
    "playlist-read-private", //ler playlist privadas
    "playlist-read-collaborative" //ler playlists colaborativas
   ]
}