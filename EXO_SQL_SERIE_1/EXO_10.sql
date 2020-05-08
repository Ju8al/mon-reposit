-- 10.Obtenir la liste des départements qui possèdent plus de 2 millions d’habitants

-- afficher departement_nom et la somme des poulation au seins des different departements en 2012
SELECT departement_nom, SUM(ville_population_2012) AS population_departement_2012
-- venant de villes
FROM villes
    -- joindre au tableau de gauche, le tableau de droite grace au co-relations entre departement_code = ville_departement
    LEFT JOIN departement
    ON departement_code = ville_departement
-- permet de groupe les meme nom ensemble
GROUP BY ville_departement,departement_nom
-- qui ont une somme superieure à 2000000
HAVING SUM(ville_population_2012)> '2000000'