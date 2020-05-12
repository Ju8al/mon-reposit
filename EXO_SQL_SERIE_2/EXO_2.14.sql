-- 14.Supprimer toutes les commandes (et les lignes des commandes) inférieur au 1er février 2019. Cela doit être effectué en 2 requêtes maximum 


-- DELETE FROM commande
-- WHERE date_achat < '2019.02.01'

-- DELETE FROM commande_ligne
-- WHERE commande_id < '25'



SELECT *
FROM client;

SELECT *
FROM commande
ORDER BY date_achat;

SELECT *
FROM commande_ligne;

SELECT *
FROM commande_category