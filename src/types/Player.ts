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
        try {
            const response = await this.api.axios.post(Routes.player(this.uuid), { tag }, {
                headers: {
                    Authorization: `${options?.overrideAuthMethod ?? this.api.defaultAuthMethod} ${options?.token}`
                },
            });

            return response.data.message;
        } catch(err) {
            return err?.response?.data?.error || 'An unknown error ocurred.';
        }
    }

    async deleteTag(options?: RequestOptions): Promise<string> {
        try {
            const response = await this.api.axios.post(Routes.player(this.uuid), null, {
                headers: {
                    Authorization: `${options?.overrideAuthMethod ?? this.api.defaultAuthMethod} ${options?.token}`
                },
            });

            return response.data.message;
        } catch(err) {
            return err?.response?.data?.error || 'An unknown error ocurred.';
        }
    }

    async toggleAdmin(options?: RequestOptions): Promise<string> {
        try {
            const response = await this.api.axios.post(Routes.toggleAdmin(this.uuid), null, {
                headers: {
                    Authorization: `${options?.overrideAuthMethod ?? this.api.defaultAuthMethod} ${options?.token}`
                },
            });

            return response.data.message;
        } catch(err) {
            return err?.response?.data?.error || 'An unknown error ocurred.';
        }
    }

    async watch(options?: RequestOptions): Promise<string> {
        try {
            const response = await this.api.axios.post(Routes.watchPlayer(this.uuid), null, {
                headers: {
                    Authorization: `${options?.overrideAuthMethod ?? this.api.defaultAuthMethod} ${options?.token}`
                },
            });

            return response.data.message;
        } catch(err) {
            return err?.response?.data?.error || 'An unknown error ocurred.';
        }
    }

    async unwatch(options?: RequestOptions): Promise<string> {
        try {
            const response = await this.api.axios.post(Routes.unwatchPlayer(this.uuid), null, {
                headers: {
                    Authorization: `${options?.overrideAuthMethod ?? this.api.defaultAuthMethod} ${options?.token}`
                },
            });

            return response.data.message;
        } catch(err) {
            return err?.response?.data?.error || 'An unknown error ocurred.';
        }
    }
}