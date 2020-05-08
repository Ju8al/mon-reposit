-- 4. Obtenir le nom des 10 villes les plus peuplées en 2012, ainsi que le nom du département associé 

-- afficher ville_nom, ville_population_2012, departement_nom
SELECT ville_nom, ville_population_2012, departement_nom
-- venant de la table villes
FROM villes
    -- joindre les colonnes où se trouve les mêmes infos
    INNER JOIN departement ON departement_code = ville_departement
-- mettre ville_population_2012 dans un ordre decroissant
ORDER BY ville_population_2012 DESC
-- les 10 plus grand
LIMIT 10;
