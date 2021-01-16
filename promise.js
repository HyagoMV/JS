const fs = require('fs')

p = new Promise((a,b)=>{
  fs.readFile('./t.txt', (err, data)=>{
    if (!err)
      a(data)
    else
      b(err)
  })
})

// Adicionados após o sucesso ou falha da operação
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
  
}, 2000); // 2s