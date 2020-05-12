-- 5. Obtenir le montant total pour chaque commande et y voir facilement la date associée à cette commande ainsi que le prénom et nom du client associé

-- j'affiche prenom et nom venant de client,date_achat venant de commande et (commande_id et la somme de prix total),...
SELECT client.prenom, client.nom, commande.date_achat, commande_id, SUM(prix_total) AS prix_commande
-- venant de commande_ligne
FROM commande_ligne
    -- je joint commande a commande_ligne grace a leur info en commun (commande.id et commande_id)
    INNER JOIN commande ON commande.id = commande_ligne.commande_id
    -- je joint client a commande grace a leur info en commun (client.id et client_id)
    INNER JOIN client ON client.id = commande.client_id
GROUP BY commande_id, client.prenom, client.nom, commande.date_achat



