-- 2. Obtenir la liste de tous les produits qui sont présent sur plusieurs commandes. 

-- Afficher nom et une nouvelle colonne article demandés qui contient le nombre de fois que l'article à été demandé. 
SELECT nom, COUNT(*) AS Articles_demandés
-- Venant de commande_ligne
FROM commande_ligne
-- regrouper les nom que l'on retrouver plusieurs fois
GROUP BY nom
-- tout les articles apparaissants plus d'une fois
HAVING COUNT(*) > 1
-- le mettre dans un ordre decroissant afin de voir au premier coup d'oeil les articles les plus demandés
ORDER BY Articles_demandés DESC;