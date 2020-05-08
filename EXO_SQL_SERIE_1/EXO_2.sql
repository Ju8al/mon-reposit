-- 2. Obtenir la liste des 50 villes ayant la plus faible superficie 

-- afficher ville_nom, ville_surface
SELECT ville_nom, ville_surface
-- venant de la table villes
FROM villes
-- mettre ville_surface, dans un ordre croissant 
ORDER BY ville_surface
-- les 50 premieres villes trouvées 
LIMIT 50;