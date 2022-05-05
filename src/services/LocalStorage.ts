enum LocalStorageKey {
  locale = 'locale',
}

export class LocalStorage {
  static LocalStorageKey = LocalStorageKey

  static setItem<T>(key: LocalStorageKey, value: T) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  static getItem<T>(key: LocalStorageKey, fallback: T): T {
    const item = localStorage.getItem(key)
    try {
      return item ? (JSON.parse(item) as T) : fallback
    } catch {
      return item ? (item as unknown as T) : fallback
    }
  }
}
