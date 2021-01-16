/*
  A Promise representa a conclusão ou falha de uma operação assíncrona. 

  Garantias
    - Os callbacks adicionados nunca serão executados antes
    da operção
    - Os callback serão chamados mesmo sendo adicionados após o SUCESSO ou FALHA
    da operação
  
    Encadema
*/



const fs = require('fs')
const { setTimeout } = require('timers')

p = new Promise((a,b)=>{
  fs.readFile('./t.txt', (err, data)=>{
    if (!err)
      a(data)
    else
      b(err)
  })
})


setTimeout(() => {
  p.then((data)=>{
    console.log('Tudo certo1')
  }).then((data)=>{
    console.log('Tudo certo2')
  }).then((data)=>{
    console.log('Tudo certo3')
  }).then((data)=>{
    console.log('Tudo certo4')
    throw('')
  }).catch((err)=>{
    console.log('Erro 1')
    throw('')
  }).catch((err)=>{
    console.log('Erro 2')
  }).finally(()=>{
    console.log('Finally 1')
  }).then(()=>{
    console.log('Tudo certo Finally ')
  })
  
}, 2000);