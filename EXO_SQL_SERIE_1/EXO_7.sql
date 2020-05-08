-- 7. Compter le nombre de villes dont le nom commence par “Saint” 

-- afficher le compte de recuperer (nommé nb_ville)
SELECT COUNT(*) AS nb_ville
-- venant de la table villes
FROM villes
-- où l'on trouve le nom des villes...
WHERE ville_nom
-- ... qui commence par SAINT
LIKE 'SAINT%';
