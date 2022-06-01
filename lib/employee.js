class Employee {
    // Constructor Declaration of Class
	constructor (name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
	}
    // Method Declaration of Class 1
	getName() {
		return this.name;
	}
    // Method 2
	getId() {
		return this.id;
	}
    // Method 3
	getEmail() {
		return this.email;
	}
    // Method 4
	getRole() {
		return 'Employee';
	}
}

module.exports = Employee;