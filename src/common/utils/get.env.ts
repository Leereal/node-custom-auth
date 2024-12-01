export const getEnv = (key: string, defaultValue?: string) => {
  const value = process.env[key];
  if (value === undefined) {
    if (defaultValue) {
      return defaultValue;
    }
    throw new Error(`ENV ${key} is not defined`);
  }
  return value;
};
