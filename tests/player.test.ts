// @ts-nocheck
import { expect, test } from "bun:test";
import GlobalTagAPI from "../src/types/GlobalTagAPI";
import { token, targetUUID as uuid } from "./auth";

test('get player', async () => {
    const wrapper = new GlobalTagAPI({ url: 'http://localhost:5000' });
    expect((await wrapper.fetchPlayer(uuid, { token }))?.uuid).toBe(uuid.replaceAll('-', ''));
});

test.skip('watch player', async () => {
    const wrapper = new GlobalTagAPI({ url: 'http://localhost:5000' });
    const player = await wrapper.fetchPlayer(uuid, { token });
    expect(async () => await player.watch({ token })).not.toThrow();
});

test.skip('unwatch player', async () => {
    const wrapper = new GlobalTagAPI({ url: 'http://localhost:5000' });
    const player = await wrapper.fetchPlayer(uuid, { token });
    expect(async () => await player.unwatch({ token })).not.toThrow();
});