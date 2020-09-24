const Employee = require("../lib/employee");

test("Can instantiate employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Victor";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Employee("Fred", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Fred", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Victor";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Fred", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Fred", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Victor", 1, "test@test.com", "Employee");
    expect(e.getRole()).toBe(testValue);
});

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object") 
});

test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Fred", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Victor";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Fred", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Fred", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Victor", 1, "test@test.com", "Employee");
    expect(e.getRole()).toBe(testValue);
});
