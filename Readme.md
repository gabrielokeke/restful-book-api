API de gestion de livres


Cette API permet de gérer des livres, des auteurs et des utilisateurs. Elle utilise MongoDB pour la base de données et Express pour le serveur. L'authentification se fait par JWT pour sécuriser certaines routes.

Stack utilisée


Backend : Node.js, Express

Base de données : MongoDB

Authentification : JSON Web Tokens (JWT)

Routes de l'API


Utilisateurs

POST /users/register : Créer un utilisateur

Données envoyées : { "username": "<nom>", "email": "<email>", "password": "<mot_de_passe>" }

Réponse : { "message": "Utilisateur créé", "token": "<jwt_token>" }

POST /users/login : Connexion d'un utilisateur

Données envoyées : { "email": "<email>", "password": "<mot_de_passe>" }

Réponse : { "message": "Connexion réussie", "token": "<jwt_token>" }

Livres
POST /books : Créer un livre (protégé par JWT)

Données envoyées : { "title": "<titre>", "author": "<id_auteur>", "publishedYear": <année>, "genre": "<genre>" }

Réponse : { "title": "<titre>", "author": "<id_auteur>", "publishedYear": <année>, "genre": "<genre>" }

GET /books : Récupérer tous les livres (public)

Réponse : [ { "title": "<titre>", "author": "<auteur>", "publishedYear": <année>, "genre": "<genre>" }, ... ]

GET /books/:id : Récupérer un livre par son ID (public)

Réponse : { "title": "<titre>", "author": "<auteur>", "publishedYear": <année>, "genre": "<genre>" }

PUT /books/:id : Modifier un livre (protégé par JWT)

Données envoyées : { "title": "<nouveau_titre>", "author": "<id_auteur>", "publishedYear": <nouvelle_année>, "genre": "<nouveau_genre>" }

Réponse : { "title": "<titre>", "author": "<auteur>", "publishedYear": <année>, "genre": "<genre>" }

DELETE /books/:id : Supprimer un livre (protégé par JWT)

Réponse : { "message": "Livre supprimé avec succès" }

Auteurs

POST /authors : Créer un auteur

Données envoyées : { "name": "<nom>", "bio": "<biographie>" }

Réponse : { "name": "<nom>", "bio": "<biographie>" }

GET /authors : Récupérer tous les auteurs

Réponse : [ { "name": "<nom>", "bio": "<biographie>" }, ... ]

GET /authors/:id : Récupérer un auteur par son ID

Réponse : { "name": "<nom>", "bio": "<biographie>" }

PUT /authors/:id : Modifier un auteur

Données envoyées : { "name": "<nouveau_nom>", "bio": "<nouvelle_bio>" }

Réponse : { "name": "<nom>", "bio": "<biographie>" }

DELETE /authors/:id : Supprimer un auteur

Réponse : { "message": "Auteur supprimé avec succès" }

Authentification

Certaines routes nécessitent un token JWT pour y accéder. Lors de l'inscription ou de la connexion, un token est généré. Ce token doit être envoyé dans l'en-tête Authorization sous la forme Bearer <token> pour accéder aux routes protégées.

