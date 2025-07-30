function fetchModalContent(fileName) {
  fetch(`/assets/html/${fileName}`)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("modal-content").innerHTML = html;
      const modal = document.getElementById("modal-example");
      openModal(modal);
    })
    .catch((err) => console.error("Failed to load modal content:", err));
}
