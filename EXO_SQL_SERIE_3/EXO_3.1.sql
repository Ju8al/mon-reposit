-- 1.Quel est la catégorie de film la plus loué, quel est son chiffre d’affaire.

-- j'affiche le nom de category, je me sert de l'inventaire afin de reporter le nombre de films loué et je fait la somme des montants...
SELECT c.name, COUNT(r.inventory_id) AS location, SUM(p.amount)
-- venant de payment
FROM payment p
    -- je jointure les tables nécessaires pour remonter jusqu'a category
    JOIN rental r ON p.rental_id = r.rental_id
    JOIN inventory i ON r.inventory_id = i.inventory_id
    JOIN film f ON i.film_id = f.film_id
    JOIN film_category fc ON f.film_id = fc.film_id
    JOIN category c ON fc.category_id = c.category_id
--je regroupe les noms afin d'avoir le resultat sur une seule ligne
GROUP BY c.name
-- j'ordonne dans un ordre décroissant l'inventory_id renommé en 'location'
ORDER BY location DESC
-- et je n'affiche que le dernier résultat
LIMIT 1;

