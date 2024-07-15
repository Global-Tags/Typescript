import { Routes } from "../util/Routes";
import GlobalTagAPI, { RequestOptions } from "./GlobalTagAPI";

type PlayerPosition = 'ABOVE' | 'BELOW' | 'LEFT' | 'RIGHT';
type PlayerBan = {
    active: boolean,
    reason: string | null,
    appealable: boolean
} | null;

type PlayerData = {
    uuid: string,
    tag: string | null,
    position: PlayerPosition,
    icon: string,
    roles: string[],
    ban: PlayerBan
};

export default class Player {
    public readonly api: GlobalTagAPI;
    public readonly uuid: string;
    public readonly tag: string | null;
    public readonly position: PlayerPosition;
    public readonly icon: string;
    public readonly roles: string[];
    public readonly ban: PlayerBan;

    constructor(api: GlobalTagAPI, data: PlayerData) {
        this.api = api;
        this.uuid = data.uuid;
        this.tag = data.tag;
        this.position = data.position;
        this.icon = data.icon;
        this.roles = data.roles;
        this.ban = data.ban;
    }

    async setTag(tag: string, options?: RequestOptions): Promise<string> {
        return new Promise<string>(async (resolve, reject) => {
            try {
                const response = await this.api.axios.post(Routes.player(this.uuid), { tag }, {
                    headers: {
                        Authorization: `${options?.overrideAuthMethod ?? this.api.defaultAuthMethod} ${options?.token}`
                    },
                });
    
                resolve(response.data.message);
            } catch(err) {
                reject(err?.response?.data?.error || 'An unknown error ocurred.');
            }
        });
    }

    async setPosition(position: PlayerPosition, options?: RequestOptions): Promise<string> {
        return new Promise<string>(async (resolve, reject) => {
            try {
                const response = await this.api.axios.post(Routes.unwatchPlayer(this.uuid), { position }, {
                    headers: {
                        Authorization: `${options?.overrideAuthMethod ?? this.api.defaultAuthMethod} ${options?.token}`
                    },
                });
    
                resolve(response.data.message);
            } catch(err) {
                reject(err?.response?.data?.error || 'An unknown error ocurred.');
            }
        });
    }

    async setIcon(icon: string, options?: RequestOptions): Promise<string> {
        return new Promise<string>(async (resolve, reject) => {
            try {
                const response = await this.api.axios.post(Routes.unwatchPlayer(this.uuid), { icon }, {
                    headers: {
                        Authorization: `${options?.overrideAuthMethod ?? this.api.defaultAuthMethod} ${options?.token}`
                    },
                });
    
                resolve(response.data.message);
            } catch(err) {
                reject(err?.response?.data?.error || 'An unknown error ocurred.');
            }
        });
    }

    async deleteTag(options?: RequestOptions): Promise<string> {
        return new Promise<string>(async (resolve, reject) => {
            try {
                const response = await this.api.axios.post(Routes.player(this.uuid), null, {
                    headers: {
                        Authorization: `${options?.overrideAuthMethod ?? this.api.defaultAuthMethod} ${options?.token}`
                    },
                });
    
                resolve(response.data.message);
            } catch(err) {
                reject(err?.response?.data?.error || 'An unknown error ocurred.');
            }
        });
    }

    async toggleAdmin(options?: RequestOptions): Promise<string> {
        return new Promise<string>(async (resolve, reject) => {
            try {
                const response = await this.api.axios.post(Routes.toggleAdmin(this.uuid), null, {
                    headers: {
                        Authorization: `${options?.overrideAuthMethod ?? this.api.defaultAuthMethod} ${options?.token}`
                    },
                });
    
                resolve(response.data.message);
            } catch(err) {
                reject(err?.response?.data?.error || 'An unknown error ocurred.');
            }
        });
    }

    async watch(options?: RequestOptions): Promise<string> {
        return new Promise<string>(async (resolve, reject) => {
            try {
                const response = await this.api.axios.post(Routes.watchPlayer(this.uuid), null, {
                    headers: {
                        Authorization: `${options?.overrideAuthMethod ?? this.api.defaultAuthMethod} ${options?.token}`
                    },
                });
    
                resolve(response.data.message);
            } catch(err) {
                reject(err?.response?.data?.error || 'An unknown error ocurred.');
            }
        });
    }

    async unwatch(options?: RequestOptions): Promise<string> {
        return new Promise<string>(async (resolve, reject) => {
            try {
                const response = await this.api.axios.post(Routes.unwatchPlayer(this.uuid), null, {
                    headers: {
                        Authorization: `${options?.overrideAuthMethod ?? this.api.defaultAuthMethod} ${options?.token}`
                    },
                });
    
                resolve(response.data.message);
            } catch(err) {
                reject(err?.response?.data?.error || 'An unknown error ocurred.');
            }
        });
    }

    async report(options?: RequestOptions): Promise<string> {
        return new Promise<string>(async (resolve, reject) => {
            try {
                const response = await this.api.axios.post(Routes.reportPlayer(this.uuid), null, {
                    headers: {
                        Authorization: `${options?.overrideAuthMethod ?? this.api.defaultAuthMethod} ${options?.token}`
                    },
                });
    
                resolve(response.data.message);
            } catch(err) {
                reject(err?.response?.data?.error || 'An unknown error ocurred.');
            }
        });
    }

    async linkDiscord(options?: RequestOptions): Promise<string> {
        return new Promise<string>(async (resolve, reject) => {
            try {
                const response = await this.api.axios.post(Routes.discordConnection(this.uuid), null, {
                    headers: {
                        Authorization: `${options?.overrideAuthMethod ?? this.api.defaultAuthMethod} ${options?.token}`
                    },
                });
    
                resolve(response.data.code);
            } catch(err) {
                reject(err?.response?.data?.error || 'An unknown error ocurred.');
            }
        });
    }

    async unlinkDiscord(options?: RequestOptions): Promise<string> {
        return new Promise<string>(async (resolve, reject) => {
            try {
                const response = await this.api.axios.delete(Routes.discordConnection(this.uuid), {
                    headers: {
                        Authorization: `${options?.overrideAuthMethod ?? this.api.defaultAuthMethod} ${options?.token}`
                    },
                });
    
                resolve(response.data.message);
            } catch(err) {
                reject(err?.response?.data?.error || 'An unknown error ocurred.');
            }
        });
    }

    async getBan(options?: RequestOptions): Promise<PlayerBan> {
        return new Promise<PlayerBan>(async (resolve, reject) => {
            try {
                const response = await this.api.axios.get(Routes.ban(this.uuid), {
                    headers: {
                        Authorization: `${options?.overrideAuthMethod ?? this.api.defaultAuthMethod} ${options?.token}`
                    },
                });
    
                resolve(response.data as PlayerBan);
            } catch(err) {
                reject(err?.response?.data?.error || 'An unknown error ocurred.');
            }
        });
    }

    async performBan(reason: string, options?: RequestOptions): Promise<string> {
        return new Promise<string>(async (resolve, reject) => {
            try {
                const response = await this.api.axios.post(Routes.ban(this.uuid), { reason }, {
                    headers: {
                        Authorization: `${options?.overrideAuthMethod ?? this.api.defaultAuthMethod} ${options?.token}`
                    },
                });
    
                resolve(response.data.message);
            } catch(err) {
                reject(err?.response?.data?.error || 'An unknown error ocurred.');
            }
        });
    }

    async editBan(banInfo: { reason: string, appealable: boolean }, options?: RequestOptions): Promise<string> {
        return new Promise<string>(async (resolve, reject) => {
            try {
                const response = await this.api.axios.put(Routes.ban(this.uuid), banInfo, {
                    headers: {
                        Authorization: `${options?.overrideAuthMethod ?? this.api.defaultAuthMethod} ${options?.token}`
                    },
                });
    
                resolve(response.data.message);
            } catch(err) {
                reject(err?.response?.data?.error || 'An unknown error ocurred.');
            }
        });
    }
    
    async unban(options?: RequestOptions): Promise<string> {
        return new Promise<string>(async (resolve, reject) => {
            try {
                const response = await this.api.axios.delete(Routes.ban(this.uuid), {
                    headers: {
                        Authorization: `${options?.overrideAuthMethod ?? this.api.defaultAuthMethod} ${options?.token}`
                    },
                });
    
                resolve(response.data.message);
            } catch(err) {
                reject(err?.response?.data?.error || 'An unknown error ocurred.');
            }
        });
    }

    async appealBan(reason: string, options?: RequestOptions): Promise<string> {
        return new Promise<string>(async (resolve, reject) => {
            try {
                const response = await this.api.axios.post(Routes.appealBan(this.uuid), { reason }, {
                    headers: {
                        Authorization: `${options?.overrideAuthMethod ?? this.api.defaultAuthMethod} ${options?.token}`
                    },
                });
    
                resolve(response.data.message);
            } catch(err) {
                reject(err?.response?.data?.error || 'An unknown error ocurred.');
            }
        });
    }
}