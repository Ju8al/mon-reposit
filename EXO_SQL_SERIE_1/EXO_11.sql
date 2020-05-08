-- 11.Remplacez les tirets par un espace vide, pour toutes les villes commençant par “SAINT-” (dans la colonne qui contient les noms en majuscule) 

SELECT REPLACE(ville_nom, 'SAINT-','SAINT ') AS ville_nom
FROM villes
WHERE ville_nom
LIKE 'SAINT-%'
