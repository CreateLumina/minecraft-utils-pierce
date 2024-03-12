import { ChildProcessWithoutNullStreams } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { Client, setConfig } from '../src';

describe('Minecraft Vanilla Legacy (1.8.9)', () => {
    setConfig('version', { number: '1.8.9', type: 'release' });

    test(
        'Installation',
        async () => {
            await Client.install();
            expect(existsSync(resolve('./minecraft/cache/json/1.8.9.json'))).toBe(true);
            expect(existsSync(resolve('./minecraft/natives/1.8.9'))).toBe(true);
            expect(existsSync(resolve('./minecraft/versions/1.8.9/1.8.9.jar'))).toBe(true);
        },
        3 * 60 * 1000,
    );

    test(
        'Starting',
        async () => {
            const process = await Client.start();
            expect(process && typeof process.kill === 'function').toBe(true);
            await new Promise<void>((resolve) => {
                setTimeout(() => {
                    (process as ChildProcessWithoutNullStreams).kill();
                    resolve();
                }, 10 * 1000);
            });
            expect(existsSync(resolve('./minecraft/saves'))).toBe(true);
            expect(existsSync(resolve('./minecraft/resourcepacks'))).toBe(true);
        },
        3 * 60 * 1000,
    );
});

describe('Minecraft Vanilla Modern (1.14.4)', () => {
    setConfig('version', { number: '1.14.4', type: 'release' });

    test(
        'Installation',
        async () => {
            await Client.install();
            expect(existsSync(resolve('./minecraft/cache/json/1.14.4.json'))).toBe(true);
            expect(existsSync(resolve('./minecraft/natives/1.14.4'))).toBe(true);
            expect(existsSync(resolve('./minecraft/versions/1.14.4/1.14.4.jar'))).toBe(true);
        },
        3 * 60 * 1000,
    );

    test(
        'Starting',
        async () => {
            const process = await Client.start();
            expect(process && typeof process.kill === 'function').toBe(true);
            await new Promise<void>((resolve) => {
                setTimeout(() => {
                    (process as ChildProcessWithoutNullStreams).kill();
                    resolve();
                }, 10 * 1000);
            });
            expect(existsSync(resolve('./minecraft/saves'))).toBe(true);
            expect(existsSync(resolve('./minecraft/resourcepacks'))).toBe(true);
        },
        3 * 60 * 1000,
    );
});