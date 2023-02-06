# Camada de apresentação

Para projetos Vue.js, a camada de apresentação é a própria aplicação.

## Estrutura dos componentes

```
- header                            // encapsular em pastas com o nome do componente
    - header.vue                    //  componente
    - header.spec.ts                //  testes do componente
    - header.types.ts               //  tipos usados no módulo
    - header.storyboook.ts          //  storybook do componente
```

## Subcamadas

### Components
Contém todos os componentes únicos e comuns encapsulados em pastas.

```
- components
    - common                                // componentes comuns, que podem ser reutilizados
        - componente-comum
            - ... arquivos do componente
    - componente específico
        - ... arquivos do componente
```

## Layouts
Contém componentes utilizados como layout em páginas.

```
- layouts // pasta que contém os componentes
    - layout-1
        ... estrutura de componentes
    - layout-2
        ...estrutura de componentes
```

## Pages
Contém as pastas referentes às rotas do sistema