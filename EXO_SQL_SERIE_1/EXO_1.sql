-- 1. Obtenir la liste des 10 villes les plus peuplées en 2012 

-- afficher ville_nom, ville_population_2012
SELECT ville_nom, ville_population_2012
-- venant de la table villes
FROM villes
-- mettre ville_population_2012 dans l'ordre décroissant...
ORDER BY ville_population_2012 DESC
-- les 10 premiers resultats trouvés
LIMIT 10;