// Default methods expected on any storage class
declare interface Storage {
    setup (schemas?: Array<RealmSchema>): any
    createItem (key: string, value: Object): Object
    updateItem (key: string, value: Object): Object
    deleteItem (item: RealmObject): Promise<void>
    getItems (key: string, filter: Object | string): Promise<Array<Object> | null>
    removeAll (key: string): Promise<void>
    convertFilter (filter: Object | string): string
    checkSchema (key: string)
    getAllKeys (): Promise<Array<string>>
    getModel (): any
}

export type Storage = Storage;