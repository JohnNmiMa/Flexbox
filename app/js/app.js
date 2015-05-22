var fbapp = angular.module('FlexboxApp', ['newton.common'])

    .controller('FlexboxCtrl', ['$scope', function($scope) {
        console.log("in FlexboxCtrl")
        $scope.openTermsAndConditionsPopover = function(visible) {
            console.log('open popover = ' + visible);
        }
    }]);

