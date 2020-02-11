export function LogClass(constructor: Function) {
  console.log(`LogClass decorator executed for the constructor:`);
  console.log(constructor);
}
