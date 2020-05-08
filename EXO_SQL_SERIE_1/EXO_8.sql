-- 8. Obtenir la liste des villes qui ont un nom existants plusieurs fois, et trier afin d’obtenir en premier celles dont le nom est le plus souvent utilisé par plusieurs communes

-- afficher ville_nom le nombre de fois q'un même nom se repete
SELECT ville_nom, COUNT(*) AS nb_concordance
-- venant de la table villes
FROM villes
-- permet de groupe les meme nom ensemble
GROUP BY ville_nom
-- met dans l'odre décroissant les totaux de concordance
ORDER BY nb_concordance DESC
