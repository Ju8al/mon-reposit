-- 6.Enregistrer le montant total de chaque commande dans le champ intitulé “cache_prix_total”

-- j'affiche commande_id et la somme de prix total,...
SELECT commande_id, SUM(prix_total) AS prix
-- venant de commande_ligne
FROM commande_ligne
-- je regroupe les même données de commande_id ensemble
GROUP BY commande_id;
-- je modifie la table commande
UPDATE commande 
SET cache_prix_total = temp.prix 
-- venant de commande_ligne (temporaire)
FROM ( SELECT commande_id, SUM(prix_total) AS prix
    FROM commande_ligne
    GROUP BY commande_id ) AS temp 
WHERE commande.id = temp.commande_id;