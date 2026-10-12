async function loadMessage() {
  const el = document.getElementById("message");
  try {
    const res = await fetch("/api/hello");
    const data = await res.json();
    el.textContent = data.message;
  } catch {
    el.textContent = "Erreur de chargement de l'API.";
  }
}

loadMessage();
