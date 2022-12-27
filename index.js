const goplay = (lame) => {
  const audio = new Audio();
  audio.src = lame + ".mp3"; //on attribue une lettre au nom du fichier et on considere que c'est une key
  audio.play();
};
