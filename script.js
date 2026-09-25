```javascript
// Récupère l'élément qui possède l'identifiant "year"
const year = document.getElementById("year");

// Affiche automatiquement l'année actuelle
// dans le pied de page.
year.textContent = new Date().getFullYear();
```
