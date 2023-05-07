class LocalStorageService{
   static saveDataToDisk<T>(key: string, content: string): void {
     try {
        localStorage.setItem(key, JSON.stringify(content))
     } catch (error) {
        console.log(error)
     }
    }
   static getDataFromDisk<T>(key: string): object {
        try {
            const data : string | null = localStorage.getItem(key)
            return JSON.parse(data!);
        } catch (error) {
            console.log(error)
        }
        return {}
    }
}

export default LocalStorageService;