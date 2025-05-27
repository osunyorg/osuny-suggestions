# Osuny Suggestions

## Installation

### Ajouter le submodule

```
cd themes
git submodule add git@github.com:osunyorg/osuny-suggestions.git
```

### Appeler le plugin

Dans `config/_default/config.yaml` :
```yaml 
theme: 
  - osuny-suggestions
  - osuny
```

### Appeler les fichiers


Dans `assets/js/main.js` : 

```js
import './theme/';
import './osuny-suggestions';
```

Dans `assets/sass/main.sass` : 

```sass
@import "_theme/hugo-osuny"
@import "osuny-suggestions"
```

## Usage

Dans Osuny, créer une page "Suggestions" avec le slug "suggestions". Créer des blocs de titre avec une mise en forme "Replié" afin de créer des onglets dans la modale de recherche. Tous les blocs sous le titre replié seront affichés au moment où l'utilisateur clique sur un des tags.


