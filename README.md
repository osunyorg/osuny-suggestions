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
