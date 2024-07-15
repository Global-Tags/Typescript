import { expect, test } from "bun:test";
import GlobalTagAPI from "../types/GlobalTagAPI";

test('using default config', () => {
    const wrapper = new GlobalTagAPI();
    expect(wrapper.url).toBe('https://gt.rappytv.com');
});

test('using merged default config', () => {
    const wrapper = new GlobalTagAPI({ url: 'http://localhost:5000', defaultAuthMethod: "LabyConnect" });
    expect(wrapper.url).toBe('http://localhost:5000');
    expect(wrapper.defaultAuthMethod).toBe('LabyConnect');
});