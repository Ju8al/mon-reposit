-- 1. Obtenir l’utilisateur ayant le prénom “Muriel” et le mot de passe “test11”, sachant que l’encodage du mot de passe est effectué avec l’algorithme Sha1.

SELECT prenom
FROM client
WHERE password = crypt('test11', password);

-- j'ai importer l'extension pgcrypto qui vas me permettre d'utiliser les algorithmes de crypt() qui sont diffèrent des algorithmes de hachage habituels comme MD5 ou SHA1 : la différence reside dans le fait qu'ils soit lents et donc plus efficace.

