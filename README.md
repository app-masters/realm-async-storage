# Realm Async Storage
Class for deal with Realm local DB similar to RN AsyncStorage

### Usage
On the `App.js`, import and give desired model list to setup.
````javascript
import {RealmStorage} from 'realm-async-storage';
...
const schemas = [UserSchema, CompanySchema];
const onError = (error) => console.error(error); // optional
RealmStorage.setup(setup, onError)

````

### Methods

- setup (schemas?: Array<RealmSchema>): any
- createItem (key: string, value: Object): Object
- updateItem (key: string, value: Object): Object
- deleteItem (item: RealmObject): Promise<void>
- getItems (key: string, filter: Object | string): Promise<Array<Object> | null>
- removeAll (key: string): Promise<void>
- convertFilter (filter: Object | string): string
- checkSchema (key: string)
- getAllKeys (): Promise<Array<string>>
- getModel (): any

### Using
- [Realm-JS 2.18.0](https://github.com/realm/realm-js)