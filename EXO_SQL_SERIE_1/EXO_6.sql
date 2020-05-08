-- 6. Obtenir la liste des 10 plus grands départements, en terme de superficie 

-- afficher departement_nom, somme des ville-surface renommer en somme_surface
SELECT departement_nom, SUM(ville_surface) AS somme_surface
-- venant de villes
FROM villes
    -- joindre au tableau de gauche, le tableau de droite grace au co-relations entre departement_code = ville_departement
    LEFT JOIN departement ON departement_code = ville_departement
-- grouper les résultats et faire un totaux sur un groupe de résultat
GROUP BY ville_departement, departement.departement_nom
-- mettre dans un ordre decroissant ces resultats
ORDER BY somme_surface DESC
--et relever les 10 plus grand
LIMIT 10;