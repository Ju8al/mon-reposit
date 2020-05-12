-- 9. Obtenir le montant total des commandes pour chaque date 

SELECT date_achat, SUM(cache_prix_total) AS prix_jours
FROM commande
GROUP BY date_achat
ORDER BY date_achat


