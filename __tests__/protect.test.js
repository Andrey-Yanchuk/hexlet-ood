// __tests__/protect.test.js
import { protect } from "../src/index.js";
/*-----------------------------------------------------*/
describe("Testing the protect function", () => {
  class Course {
    constructor(name) {
      this._name = name;
    }
    getName() {
      return this._name;
    }
  }
  let course, protectedCourse;
  beforeEach(() => {
    course = new Course("Object-oriented design");
    protectedCourse = protect(course);
  });
  test("allows calling public methods", () => {
    expect(protectedCourse.getName()).toBe("Object-oriented design");
  });
  test("denies direct access to private properties", () => {
    expect(() => protectedCourse._name).toThrow(
      'Acces to private property "_name" is denied!',
    );
  });
  test("denies modification of private properties", () => {
    expect(() => (protectedCourse._name = "OOD")).toThrow(
      'Cannot modify private property "_name"',
    );
  });
  test("denies access to non-existing properties", () => {
    expect(() => protectedCourse._nonExists).toThrow(
      'Acces to private property "_nonExists" is denied!',
    );
  });
  test("denies creating new properties", () => {
    expect(() => (protectedCourse._newProp = "test")).toThrow(
      'Cannot modify private property "_newProp"',
    );
  });
  test("allows modifying existing public properties", () => {
    class TestClass {
      constructor(value) {
        this.value = value;
      }
    }
    const obj = new TestClass(10);
    const protectedObj = protect(obj);
    protectedObj.value = 20;
    expect(protectedObj.value).toBe(20);
  });
  test("throws error if target is not an instance", () => {
    expect(() => protect(null)).toThrow("Target must be instance!");
    expect(() => protect({})).toThrow("Target must be instance!");
  });
});
