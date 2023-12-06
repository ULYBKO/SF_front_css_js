//e_4_3

//1.
function checkProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
}

//2.
function checkProperty(obj, propertyName) {
    return propertyName in obj;
}

//3.
function createEmptyObject() {
  return Object.create(null);
}


