import { expect, test } from "bun:test";
import GlobalTagAPI from "../src/types/GlobalTagAPI";
import { token } from "./auth";

const uuid = '5b487db8-0f88-46b9-9dc4-d969c857d961';

test('get player', async () => {
    const wrapper = new GlobalTagAPI({ url: 'http://localhost:5000' });
    expect((await wrapper.fetchPlayer(uuid, { token }))?.uuid).toBe(uuid.replaceAll('-', ''));
});

test('watch player', async () => {
    const wrapper = new GlobalTagAPI({ url: 'http://localhost:5000' });
    const player = await wrapper.fetchPlayer(uuid, { token });
    expect(async () => await player.watch({ token })).not.toThrow();
});

test('unwatch player', async () => {
    const wrapper = new GlobalTagAPI({ url: 'http://localhost:5000' });
    const player = await wrapper.fetchPlayer(uuid, { token });
    expect(async () => await player.unwatch({ token })).not.toThrow();
});