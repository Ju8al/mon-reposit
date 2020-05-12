-- 3. Obtenir la liste de tous les produits qui sont présent sur plusieurs commandes et y ajouter une colonne qui liste les identifiants des commandes associées. 

-- Afficher nom et une nouvelle colonne article demandés qui contient le nombre de fois que l'article à été demandé et les id de commande. 
SELECT nom, COUNT(*) AS Articles_demandés, array_to_string(array_agg(commande_id), '; ') AS id_commandes_associées
-- Venant de commande_ligne
FROM commande_ligne
-- regrouper les nom que l'on retrouver plusieurs fois
GROUP BY nom
-- tout les articles apparaissants plus d'une fois
HAVING COUNT(*) > 1
-- le mettre dans un ordre decroissant afin de voir au premier coup d'oeil les articles les plus demandés
ORDER BY Articles_demandés DESC;

-- GROUP_CONCAT est la fonction qui permet de regrouper les valeurs d'un groupe en une chaine de charactère cependant il ne fonctionne que sur mySQL array_to_string(array_agg(child_name), ',') en est l'equivalent.


