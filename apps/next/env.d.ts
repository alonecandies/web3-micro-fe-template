/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_ENV: string; // this is the line you want
    }
  }
}

export {};
