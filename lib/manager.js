const Employee = require("./employee")

class Manager extends Employee {
    constructor (name, id, email, office) {
        super(name, id, email);
        this.officeNumber = office;
        this.title = "Manager";
    }
    getRole() {
        return this.title;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager;