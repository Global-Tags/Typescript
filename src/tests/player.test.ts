import { expect, test } from "bun:test";
import GlobalTagAPI from "../types/GlobalTagAPI";

const uuid = '5b487db8-0f88-46b9-9dc4-d969c857d961';
const token = '...';

test('get player', async () => {
    const wrapper = new GlobalTagAPI({ url: 'http://localhost:5000' });
    expect((await wrapper.fetchPlayer(uuid, { token }))?.uuid).toBe(uuid.replaceAll('-', ''));
});

test('watch player', async () => {
    const wrapper = new GlobalTagAPI({ url: 'http://localhost:5000' });
    const uuid = '5b487db8-0f88-46b9-9dc4-d969c857d961';
    const player = await wrapper.fetchPlayer(uuid, { token });
    expect(async () => { const res = await player.unwatch({ token }); console.log(res); }).not.toThrow();
})