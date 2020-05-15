-- 2.Combien d’utilisateurs “distincte” ont loué des films d’actions. 

-- j'affiche le nom de category et je compte (distinctement) le nombre de customer qui en ont loué...
SELECT c.name, COUNT(DISTINCT r.customer_id) AS fans_d_action
-- venant de la table rental
FROM rental r
    -- je jointure les tables nécessaires pour remonter jusqu'a category
    JOIN customer cu ON r.customer_id = cu.customer_id
    JOIN inventory i ON r.inventory_id = i.inventory_id
    JOIN film f ON i.film_id = f.film_id
    JOIN film_category fc ON f.film_id = fc.film_id
    JOIN category c ON fc.category_id = c.category_id
-- je ne selectionne que la categorie Action
WHERE c.name = 'Action'
-- et je les regroupe afin d'avoir le resultat sur une seule ligne
GROUP BY c.name