// Dependency Injection Container
type DependencyMap = Map<string, unknown>;

const dependencies: DependencyMap = new Map();

export const container = {
  register<T>(key: string, value: T) {
    dependencies.set(key, value);
  },

  get<T>(key: string): T {
    const dependency = dependencies.get(key);

    if (!dependency) {
      throw new Error(`Dependency '${key}' not found`);
    }

    return dependency as T;
  },

  has(key: string): boolean {
    return dependencies.has(key);
  },
};
