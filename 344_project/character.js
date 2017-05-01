(function() {
	var app = angular.module('termproject', []);

	app.controller('CharacterController', ['$scope', function($scope) {
		$scope.name = $scope.sex = $scope.player = $scope.age = $scope.height = $scope.weight = $scope.xp = $scope.background = $scope.class = $scope.ability = $scope.language = $scope.race = $scope.skill = $scope.faction = $scope.alignment = '';
		$scope.characters = [];
		
		$scope.all = function() {
			$.getJSON('getCharacter', function(result) {
					$scope.characters = result;
			});
		};

		$scope.add = function() {
			var newCharacter = {
				"name" : $scope.name,
				"sex" : $scope.sex,
				"player" : $scope.player,
                "age" : $scope.age,
                "height" : $scope.height,
                "weight" : $scope.weight,
                "xp" : $scope.xp,
                "background" : $scope.background,
                "class" : $scope.class,
                "ability" : $scope.ability,
                "language" : $scope.language,
                "race" : $scope.race,
                "skill" : $scope.skill,
                "faction" : $scope.faction,
                "alignment" : $scope.alignment
			};
			$scope.characters.push(newCharacter);
            console.log(newCharacter);
			$.post('putCharacter', newCharacter);
		  $scope.name = $scope.sex = $scope.player = $scope.age = $scope.height = $scope.weight = $scope.xp = $scope.background = $scope.class = $scope.ability = $scope.language = $scope.race = $scope.skill = $scope.faction = $scope.alignment = '';
		};
		
		$scope.update = function() {
			var updateCharacter = { "name" : $scope.name};
			$.post('updateCharacter', updateCharacter);
			$scope.name = $scope.sex = $scope.player = $scope.age = $scope.height = $scope.weight = $scope.xp = $scope.background = $scope.class = $scope.ability = $scope.language = $scope.race = $scope.skill = $scope.faction = $scope.alignment = '';
		};
		
		$scope.remove = function(character) {
			$scope.characters.splice($scope.caracters.indexOf(character), 1);
			$.post('removeCharacter', character);
		};									 
	}]);
}());
