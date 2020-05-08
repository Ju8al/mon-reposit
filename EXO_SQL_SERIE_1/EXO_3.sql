-- 3. Obtenir la liste des départements d’outres-mer, c’est-à-dire ceux dont le numéro de département commencent par “97” 

-- afficher departement_nom, departement_code
SELECT departement_nom, departement_code
-- venant de la table departement
FROM departement
-- où l'on trouve les numéros de departemment...
WHERE departement_code
-- ... qui commence par 97
LIKE '97%';