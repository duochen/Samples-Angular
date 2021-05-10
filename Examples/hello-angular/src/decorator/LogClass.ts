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

export function LogMethod(target: any,
                 propertyKey: string,
                 descriptor: PropertyDescriptor) {
  console.log("Inside Decorator: LogMethod: ");
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}

export function LogMethodWithParams(message: string) {
   return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
     console.log(`{propertyKey}: ${message}`)
   };
 }

 export function LogAccessor(target: any,
                             propertyKey: string,
                             descriptor: PropertyDescriptor) {
  console.log(`LogAccessor decorator called`);
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}

export function LogAccessorWithParams(message: string) {
  return (target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor) => {
      console.log(`Message from decorator: ${message}`);
    };
}

export function LogProperty(target: any, propertyKey: string) {
  console.log(`LogProperty decorator called`);
  console.log(target);
  console.log(propertyKey);
}

export function LogParameter(target: any, parameterName: string, parameterIndex: number) {
  console.log(`LogParameter decorator called`);
  console.log(target);
  console.log(parameterName);
  console.log(parameterIndex);
}
