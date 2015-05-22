var newtonCommon = angular.module('newton.common', []);

var buttonController = ['$scope', function ($scope) {
    $scope.state = $scope.disabled ? "disabled" : "up";

    var disabledWatcher = $scope.$watch("disabled", function (vaule) {
        if (!vaule) {
            $scope.state = "up";
        } else {
            $scope.state = "disabled";
        }
    });

    $scope.onMouseEnter = function () {
        if ($scope.needKeepDownState) {
            return;
        }
        if (!$scope.disabled) {
            $scope.state = "over";
        }
    };

    $scope.onMouseLeave = function () {
        if ($scope.needKeepDownState) {
            return;
        }
        if (!$scope.disabled) {
            $scope.state = "up";
        }
    };

    $scope.onMouseDown = function () {
        if ($scope.needKeepDownState) {
            return;
        }
        if (!$scope.disabled) {
            $scope.state = "down";
        }
    };

    $scope.onMouseUp = function () {
        if ($scope.needKeepDownState) {
            return;
        }
        if (!$scope.disabled) {
            $scope.state = "up";
        }
    };

    var needKeepDownStateWatcher = $scope.$watch("needKeepDownState", function (vaule) {
        if ($scope.disabled) {
            return;
        }
        if (vaule) {
            $scope.state = "down";
        } else {
            $scope.state = "up";
        }
    });

    $scope.$on('$destroy', function () {
        needKeepDownStateWatcher();
        disabledWatcher();
    })
}];

newtonCommon.directive("newtonLink", function () {
    return {
        restrict: "E",
        transclude: true,
        replace: true,
        controller: buttonController,
        scope: {
            color: "@",
            icon: '@',
            disabled: "=",
            underline: "@"
        },
        templateUrl: './newton-link.html',
        link: function (scope, element, attrs) {
            scope.data = {};
            scope.data.underline = angular.isDefined(attrs.underline) ? attrs.underline : 'false';
            scope.data.color = angular.isDefined(attrs.color) ? attrs.color : "blue";
        }
    }
});


