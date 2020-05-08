-- 5. Obtenir la liste du nom de chaque département, associé à son code et du nombre de commune au sein de ces département, en triant afin d’obtenir en priorité les départements qui possèdent le plus de communes 

-- solution trouvée sur le net mais decortiquée afin de mieux en comprendre le principe

-- afficher departement_nom, ville_departement, nbs d'items (communes) dans chaques departement
SELECT departement_nom, ville_departement, COUNT(*) AS nbr_communes
-- venant de la table villes 
FROM villes
    -- joindre au tableau de gauche, le tableau de droite grace au co-relations entre departement_code = ville_departement
    LEFT JOIN departement ON departement_code = ville_departement
-- grouper plusieurs résultats et faire un totaux sur un groupe de résultat
GROUP BY ville_departement, departement.departement_nom
-- mettre dans un ordre decroissant ces resultats
ORDER BY nbr_communes DESC