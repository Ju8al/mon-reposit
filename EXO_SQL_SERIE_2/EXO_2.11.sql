-- 11.Enregistrer la valeur de la catégorie, en suivant les règles suivantes : 
-- ○ “1” pour les commandes de moins de 200€ 
-- ○ “2” pour les commandes entre 200€ et 500€ 
-- ○ “3” pour les commandes entre 500€ et 1.000€ 
-- ○ “4” pour les commandes supérieures à 1.000€ 

-- UPDATE commande
-- SET category =
-- CASE
-- WHEN cache_prix_total < 200 THEN 1
-- WHEN cache_prix_total BETWEEN 200 AND 500 THEN 2
-- WHEN cache_prix_total BETWEEN 500 AND 1000 THEN 3
-- WHEN cache_prix_total > 1000 THEN 4
-- END

SELECT *
FROM commande


