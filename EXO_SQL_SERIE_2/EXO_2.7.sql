-- 7. Obtenir le montant global de toutes les commandes, pour chaque mois 

SELECT EXTRACT(MONTH from date_achat)AS mois, SUM(cache_prix_total) AS rente_mensuelle
from commande
GROUP BY mois