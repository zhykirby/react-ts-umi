import router from 'umi/router';

export function jump(path:string) {
    return router.push(path);
}