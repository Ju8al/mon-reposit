-- 9. Obtenir en une seule requête SQL la liste des villes dont la superficie est supérieur à la superficie moyenne 

-- afficher ville_nom et ville_surface
SELECT ville_nom, ville_surface AS surface_ville_arrondie
-- Venant de villes
FROM villes
-- Où ville_surface est supérieur à la moyenne calculée grâce à la fonction AVG
WHERE ville_surface > (
    SELECT AVG(ville_surface)
FROM villes
  )
-- Afin d'ameliorer la lecture je classe les résultats dans un ordre croissant
ORDER BY ville_surface ASC;

-- requete afficher la moyenne
SELECT AVG(ville_surface) AS moyenne
FROM villes
