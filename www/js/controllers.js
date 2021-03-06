 angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state, Login) {
  $scope.email = '';
  $scope.senha = '';

  $scope.continuar = function() {
 $state.go("clinicasehospitais");
  }

  $scope.novoCadastro = function(email, senha) {
    Login.novo(email, senha, function(erro) {
      alert(erro);
    });
  }
})

.controller('clinicasehospitaisCtrl', function($scope, $state, Tarefas) {

  $scope.clinicas = [
    'Femina',
    'Santa Rosa',
    'São Matheus'
  ]

  $scope.informacoes = function() {
   $state.go("informacoes");
  }
})
.controller('informacoesCtrl', function($scope, $stateParams, $state, Tarefas) {

  var feminaInfo = {
    telefone: '3025-2525',
    endereco: 'Rua Corumbá, 538 - Baú, cuiabá - MT, 78008-40'
  };

  var santaRosaInfo = {
    telefone: '3025-2525',
    endereco: 'Rua Adel maluf, 119 - jardim mariana, cuiabá - MT, 78015-200'
  }
  var SaoMatheusInfo = {
    telefone: '3025-2525',
    endereco: 'Av. aclimação , 335 - Bosque da saúde, cuiabá - MT, 78050-040'
  }

  $scope.informacoes = {}

  if ($stateParams.clinica === 'Femina') {
    $scope.informacoes = feminaInfo;
  } else if ($stateParams.clinica === 'Santa Rosa') {
    $scope.informacoes = santaRosaInfo;
  } else if ($stateParams.clinica === 'São Matheus') {
    $scope.informacoes = SaoMatheusInfo;
  }
    $scope.especialidades = function() {
      $state.go("especialidades", {clinica: $stateParams.clinica});
    }

})
.controller('especialidadesCtrl', function($scope, $stateParams, Tarefas) {


  var feminaespecialidades = [
 'Cardiologista: R$ 55,00',	 
 'Clínica Geral: R$ 50,00',	
 'Coloproctologia: R$ 40,00',	
 'Dermatologia: R$ 45,00',	 
 'Endocrinologia: R$ 50,00',	 	
 'Fisioterapia: R$ 50,00',	
 'Fonoaudiologia: R$ 50,00',	 	 
 'Geriatria: R$ 55,00',	
 'Ginecologia: R$ 40,00',	 
 'Hematologia: R$ 45,00',	 
 'Homeopatia: R$ 40,00',	 
 'Infectologia: R$ 50,00',
 'Nefrologia: R$ 50,00',	
 'Neurologia: R$ 60,00',	 
 'Nutrição: R$ 50,00',	 
 'Nutrologia: R$ 50,00',		 
 'Oftalmologia: R$ 55,00',	 
 'Oncologia: R$ 50,00',	 
 'Ortopedia e Traumatologia: R$ 50,00',	
 'Otorrinolaringologia: R$ 50,00',
 'Pediatria: R$ 40,00',
 'Pneumologia: R$ 50,00',	 
 'Psicologia: R$ 40,00',
 'Psicopedagogia: R$ 40,00',	 
 'Psiquiatria: R$ 40,00',
 'Reumatologia: R$ 50,00',	 
 'Urologia: R$ 50,00'	
  ];
   
    var Santarosaespecialidades = [ 
 'Cardiologista: R$ 55,00',	 
 'Clínica Geral: R$ 50,00',	
 'Coloproctologia: R$ 40,00',	
 'Dermatologia: R$ 45,00',	 
 'Endocrinologia: R$ 50,00',	 	
 'Fisioterapia: R$ 50,00',	
 'Fonoaudiologia: R$ 50,00',	 	 
 'Geriatria: R$ 55,00',	
 'Ginecologia: R$ 40,00',	 
 'Hematologia: R$ 45,00',	 
 'Homeopatia: R$ 40,00',	 
 'Infectologia: R$ 50,00',
 'Nefrologia: R$ 50,00',	
 'Neurologia: R$ 60,00',	 
 'Nutrição: R$ 50,00',	 
 'Nutrologia: R$ 50,00',		 
 'Oftalmologia: R$ 55,00',	 
 'Oncologia: R$ 50,00',	 
 'Ortopedia e Traumatologia: R$ 50,00',	
 'Otorrinolaringologia: R$ 50,00',
 'Pediatria: R$ 40,00',
 'Pneumologia: R$ 50,00',	 
 'Psicologia: R$ 40,00',
 'Psicopedagogia: R$ 40,00',	 
 'Psiquiatria: R$ 40,00',
 'Reumatologia: R$ 50,00',	 
 'Urologia: R$ 50,00'	
  ];
  
  
  var Saomatheusespecialidades = [
 'Cardiologista: R$ 55,00',	 
 'Clínica Geral: R$ 50,00',	
 'Coloproctologia: R$ 40,00',	
 'Dermatologia: R$ 45,00',	 
 'Endocrinologia: R$ 50,00',	 	
 'Fisioterapia: R$ 50,00',	
 'Fonoaudiologia: R$ 50,00',	 	 
 'Geriatria: R$ 55,00',	
 'Ginecologia: R$ 40,00',	 
 'Hematologia: R$ 45,00',	 
 'Homeopatia: R$ 40,00',	 
 'Infectologia: R$ 50,00',
 'Nefrologia: R$ 50,00',	
 'Neurologia: R$ 60,00',	 
 'Nutrição: R$ 50,00',	 
 'Nutrologia: R$ 50,00',		 
 'Oftalmologia: R$ 55,00',	 
 'Oncologia: R$ 50,00',	 
 'Ortopedia e Traumatologia: R$ 50,00',	
 'Otorrinolaringologia: R$ 50,00',
 'Pediatria: R$ 40,00',
 'Pneumologia: R$ 50,00',	 
 'Psicologia: R$ 40,00',
 'Psicopedagogia: R$ 40,00',	 
 'Psiquiatria: R$ 40,00',
 'Reumatologia: R$ 50,00',	 
 'Urologia: R$ 50,00'	
  ];
 

  $scope.especialidades = [];
   if ($stateParams.clinica === 'Femina') {
    $scope.especialidades = feminaespecialidades;
   }
  else if ($stateParams.clinica === 'Santa Rosa') {
      $scope.especialidades = Santarosaespecialidades;
   }
  else if ($stateParams.clinica === 'São matheus') {
       $scope.especialidades = Saomatheusespecialidades;
       navigator.geolocation.getCurrentPosition(function(position){
alert(position.coords.latitude)
       })
  }
})
.controller('CadastroCtrl', function($scope, $state, Clinicas) {
    $scope.nome = '';
    $scope.telefone ='';
    $scope.endereco ='';
    $scope.especialidades =''; 
  

  $scope.cadastro = function(nome,telefone,endereco,especialidades) {
   Clinicas.salvar(nome,telefone,endereco,especialidades, function(error) {
      if (error) {
        alert(error)
      }
   })
  }

})
function converterObjParaArray (obj) {
  var array = [];
  for (var key in obj) {
    obj[key].id = key;
    array.push(obj[key]);
  }
  return array;
}
  