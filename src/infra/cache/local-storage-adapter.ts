import { SetStorage, GetStorage } from "@data/protocols/cache";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class LocalStorageAdapter implements SetStorage, GetStorage {
  async set(key: string, value: object): Promise<void> {
    if (value) {
      AsyncStorage.setItem(key, JSON.stringify(value));
    } else {
      AsyncStorage.removeItem(key);
    }
  }

  async get (key: string):Promise<any>{
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null
  }
}
