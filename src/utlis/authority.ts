//权限管理，存储在localStorage
export enum AuthorityType {
    guest = 'guest',
    user = 'user',
    admin = 'admin',
}

export const storageKey = 'backstage-authority';

export function getAuthority() {
    return localStorage.getItem(storageKey) || AuthorityType.guest;
}

export function setAuthority(authority: AuthorityType) {
    return localStorage.setItem(storageKey, authority);
}