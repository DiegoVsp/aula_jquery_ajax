let body = document.querySelector('body')
let p = document.createElement('p')
p.setAttribute('id','bairro')

function consultaCep() {
  let cep = document.querySelector('#cep').value
  $.ajax({
    url: `https://viacep.com.br/ws/${cep}/json/`,
    type: "GET",
    success: function (response) {
      console.log(response)
      $("#logradouro").html(response.logradouro)
      $("#bairro").html(response.bairro)
      $("#localidade").html(response.localidade)
      $("#uf").html(response.uf)
      // $("#logradouro").html(response.logradouro);
      // let logradouro = document.querySelector('#logradouro').innerHTML=response.logradouro
      // p.innerHTML=response.bairro
      // console.log(response.bairro)
      // alert(response.logradouro)
    }
  })
}
body.insertBefore(p,logradouro)
// body.insertBefore(p,logradouro.nextElementSibling)
