// This object will always be reachable from the global scope root
const reachableObject = { prop1: 'reachable' };

function createUnreachableObjects() {
  // These objects are reachable as long as the function is executing
  const unreachableObject = {};
  const unreachableObject2 = {};
  // Even though unreachableObject2 is reachable from unreachableObject, it is not reachable from the global scope root
  // after the function is executed, unreachableObject and unreachableObject2 will be unreachable
  unreachableObject['prop'] = unreachableObject2;
  unreachableObject2['prop'] = unreachableObject;

  // reachableObject is reachable from the global scope root
  console.log(global.reachableObject);
}

createUnreachableObjects();
// Calling createUnreachableObjects() will create unreachableObject and unreachableObject2 with totally new memory addresses
createUnreachableObjects();
