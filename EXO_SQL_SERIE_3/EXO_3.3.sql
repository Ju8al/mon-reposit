-- 3.Déterminer la moyenne de revenu par catégorie ordonnée dans l’ordre décroissant.

SELECT c.name AS category,
    sum(p.amount) AS total_sales,
    SUM(p.amount) / ( SELECT MAX(category_id)
    FROM category ) AS revenu_moyen

FROM payment p
    JOIN rental r ON p.rental_id = r.rental_id
    JOIN inventory i ON r.inventory_id = i.inventory_id
    JOIN film f ON i.film_id = f.film_id
    JOIN film_category fc ON f.film_id = fc.film_id
    JOIN category c ON fc.category_id = c.category_id
GROUP BY c.name
ORDER BY category DESC;

  