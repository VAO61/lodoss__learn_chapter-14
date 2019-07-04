var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DeveloperFactory = require('../_factories/DeveloperFactory.ts');
var Department = require('./Department.ts');
var TestDept = /** @class */ (function (_super) {
    __extends(TestDept, _super);
    function TestDept() {
        return _super.call(this) || this;
    }
    TestDept.prototype.hiredDevelopers = function () {
        this.developers.push(DeveloperFactory.createTestDeveloper());
    };
    return TestDept;
}(Department));
module.exports = TestDept;
