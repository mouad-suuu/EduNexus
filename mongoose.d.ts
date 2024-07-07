declare global {
  namespace NodeJS {
    interface Global {
      mongoose: typeof mongoose;
    }
  }
}

let cached = global.mongoose;
