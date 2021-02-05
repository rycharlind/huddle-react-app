export default class PathUtil {
    static getPath(path: string) {
        return process.env.PUBLIC_URL + path;
    }
}
