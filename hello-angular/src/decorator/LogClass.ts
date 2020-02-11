export function LogClass(constructor: Function) {
  console.log(`LogClass decorator executed for the constructor:`);
  console.log(constructor);
}

export function LogClassWithParams(prefix: string, suffix: string) {
  return (constructor: Function) => {
    console.log(`
    ${prefix}
    LogClassWithParams decorator called for:
    ${constructor}
    ${suffix}`);
  };
}
