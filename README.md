# Modules
...

## Store
...

## Router
...

## UI
...

### Icons
> Nesse projeto usamos a biblioteca de ícones recomendada pelo `NaiveUI`.

```vue
<script lang="ts" setup>
import { Add } from '@vicons/ionicons5'
</script>

<template>
  <Icon><Add /></Icon>
</template>
```

# Store
...


# Hexagonal Architecture
Esse projeto busca implementar a arquitetura hexagonal, um padrão também conhecido
como "Ports and Adapters", seguindo o seguinte fluxo de dados.


> outside > app model > domain

> browser > controller > services > business-logic < repository < dbAdapter < database
