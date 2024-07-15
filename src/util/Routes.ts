export const Routes = {
    
    /**
     * Route for
     * - GET `/players/${uuid}`
     * - POST `/players/${uuid}`
     * - DELETE `/players/${uuid}`
     */
    player(uuid: string) {
        return `/players/${uuid}` as const;
    },

    /**
     * Route for
     * - POST `/players/${uuid}/position`
     */
    setPosition(uuid: string) {
        return `/players/${uuid}/position` as const;
    },

    /**
     * Route for
     * - POST `/players/${uuid}/icon`
     */
    setIcon(uuid: string) {
        return `/players/${uuid}/icon` as const;
    },

    /**
     * Route for
     * - POST `/players/${uuid}/admin`
     */
    toggleAdmin(uuid: string) {
        return `/players/${uuid}/admin` as const;
    },

    /**
     * Route for
     * - POST `/players/${uuid}/watch`
     */
    watchPlayer(uuid: string) {
        return `/players/${uuid}/watch` as const;
    },

    /**
     * Route for
     * - POST `/players/${uuid}/unwatch`
     */
    unwatchPlayer(uuid: string) {
        return `/players/${uuid}/unwatch` as const;
    },

    /**
     * Route for
     * - POST `/players/${uuid}/report`
     */
    reportPlayer(uuid: string) {
        return `/players/${uuid}/report` as const;
    },

    /**
     * Route for
     * - POST `/players/${uuid}/connections/discord`
     * - DELETE `/players/${uuid}/connections/discord`
     */
    discordConnection(uuid: string) {
        return `/players/${uuid}/connections/discord` as const;
    },

    /**
     * Route for
     * - GET `/players/${uuid}/ban`
     * - POST `/players/${uuid}/ban`
     * - PUT `/players/${uuid}/ban`
     * - DELETE `/players/${uuid}/ban`
     */
    ban(uuid: string) {
        return `/players/${uuid}/ban` as const;
    },

    /**
     * Route for
     * - POST `/players/${uuid}/ban/appeal`
     */
    appealBan(uuid: string) {
        return `/players/${uuid}/ban/appeal` as const;
    }
};