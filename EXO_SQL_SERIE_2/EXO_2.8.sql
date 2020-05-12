-- 8. Obtenir la liste des 10 clients qui ont effectué le plus grand montant de commandes, et obtenir ce montant total pour chaque client. 

-- je selectionne ce que je veux afficher
SELECT client.prenom, client.nom, SUM(cache_prix_total)AS depenses_total
-- je designe la table que je veux manipuler
FROM commande
    -- je join les table afin d'afficher les donnée que je desire
    LEFT JOIN client ON client.id = commande.client_id
-- je regroupe les client_id ensemble 
GROUP BY commande.client_id, client.prenom, client.nom
-- je met les resultat dans un ordre decroissant
ORDER BY depenses_total DESC
-- je n'affiche que les 10 premiers
LIMIT 10