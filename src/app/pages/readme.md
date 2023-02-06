# app/pages

> Aqui são definidas as páginas da aplicação. Neste projeto é
> utilizado o plugin `https://github.com/hannoeru/vite-plugin-pages`
> para realizar o chamado "File System Routing", ou roteamento baseado
> no sistema de arquivos. Dessa maneira, não descrevemos rotas e seus
> respectivos componentes e sim, os próprios componentes em diretórios
> pré-definidos, que se tornarão rotas quando sistema é colocado de pé.

- Veja essa [documentação](https://github.com/hannoeru/vite-plugin-pages#file-system-routing) para mais detalhes.

Siga a estrutura abaixo para criar suas páginas.

```
# folder structure
src/app/pages/
  ├── users/               | agrupamento de rota --> '/users'
  │  ├── components        | componentes usados na rota. Não será mapeado para rota
  │  │  └── form.vue       | componente usado na rota '/users'
  │  ├── [id].vue          | rota -> '/users/<id>'
  │  └── index.vue         | rota -> '/users'
  ├── home.vue             | rota -> '/home'
  └── [...all].vue         | agrupamento para todas as outras rotas
 ```

Nos componentes de rotas, declare uma tag `route`, que contará com alguns
metadados acerca da rota. Esses dados serão transportados para o
objeto de rota (`vue-router.Route`) e podem ser utilizados nos middlewares.

```vue
...

<route lang="yaml">
  name: ""      // nome da página
  meta:         // metadados
    ...
    layout: ""  // layout utilizado na página
</route>
```
