
# Promise

Uma `Promise` representa uma __conclusão__ ou __falha__ de uma _operação assíncrona_.

## Garantias

* Os _callbacks_ adicionados nunca serão invocados antes da execução da _operação assíncrona_. 
* Os _callbacks_ serão chamados mesmo sendo adicionados após o __sucesso__ ou __falha__ da _operação assíncrona_.

## Encadeamento
  É comum a execução de duas o mais operações assíncronas consecutivas, onde cada operação subsequente incia quando a anterior for __bem-sucedida__. Com isso criamos uma __cadeia de promessas__.