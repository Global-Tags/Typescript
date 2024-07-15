import { Routes } from "../util/Routes";
import Player from "./Player";
import Axios, { AxiosInstance } from "axios";

type AuthProvider = 'LabyConnect' | 'Minecraft' | 'Bearer' | string;

type GlobalTagOptions = {
    url?: string,
    defaultAuthMethod?: AuthProvider
}

const defaultOptions: GlobalTagOptions = {
    url: 'https://gt.rappytv.com',
    defaultAuthMethod: 'Bearer'
}

export type RequestOptions = {
    token?: string,
    overrideAuthMethod?: AuthProvider
}

export default class GlobalTagAPI {
    public readonly url!: string;
    public readonly axios: AxiosInstance;
    public readonly defaultAuthMethod!: string;

    constructor(options: GlobalTagOptions = defaultOptions) {
        options = { ...defaultOptions, ...options };
        this.url = options.url;
        this.axios = Axios.create({ baseURL: this.url });
        this.defaultAuthMethod = options.defaultAuthMethod;
    }

    async fetchPlayer(uuid: string, options?: RequestOptions): Promise<Player | null> {
        try {
            const response = await this.axios.get(Routes.player(uuid), {
                headers: {
                    Authorization: `${options?.overrideAuthMethod ?? this.defaultAuthMethod} ${options?.token}`
                }
            });
            return new Player(this, response.data);
        } catch {
            return null;
        }
    }
}