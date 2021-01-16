
# Promise

Uma `Promise` representa uma __conclusão__ ou __falha__ de uma _operação assíncrona_.

## Garantias

* Os _callbacks_ adicionados nunca serão invocados antes da execução da _operação assíncrona_. 
* Os _callbacks_ serão chamados mesmo sendo adcionados após o __sucesso__ ou __falha__ da _operação assíncrona_.

## Encadeamento