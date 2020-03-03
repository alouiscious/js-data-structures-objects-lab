// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver,{ [key]: value });
}
  // - This function should not mutate the original driver and should returns a cloned driver with the new key value pair then return a new driver that has an updated value for the key passed in.

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
} 
  // - This function should work the same as updateDriverWithKeyAndValue(). It updates `driver` with the given `key` and `value` and returns the entire updated driver. It is destructive and it should mutate the driver parameter passed in.

function deleteFromDriverByKey(driver, key){
  // return Object.assign({}, driver);
  const newDriver = Object.assign({}, driver);
  delete newDriver[key];
  return newDriver;
  // - It should delete the key/value pair from a clone of driver and returns the new driver, for the key that was passed in from the driver Object. This should not mutate the driver passed in.
} 
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
  // - This function should work the same as deleteFromDriverByKey() but it should mutate the original driver passed in. returns driver without the delete key/value pair. Be sure and consider whether dot-notation or bracket-notation might affect your solution.
} 