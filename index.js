const url = "https://sanyamapi.sanym04.repl.co/name?text";


fetch(url)
  .then((res) => res.json())
  .catch((err) => document.write(" ERROR OCURRED : " + err));