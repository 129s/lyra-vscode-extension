import { Player } from 'midi-player-js';
import * as fs from 'fs';
import * as path from 'path';
import { tmpdir } from 'os';

export enum PlayMode {
    Once,
    Loop
}

export class MidiPlayerManager {
    private player?: Player;
    private currentFile?: string;
    private loopCount = 0;
    private isLooping = false;

    async play(buffer: Buffer, loop: boolean = false) {
        this.stop();

        const tempPath = path.join(tmpdir(), `lyra_${Date.now()}.mid`);
        fs.writeFileSync(tempPath, buffer);
        this.currentFile = tempPath;

        this.player = new Player();
        this.isLooping = loop;

        this.player.on('endOfFile', () => {
            if (this.isLooping) {
                this.loopCount++;
                this.player?.play();
            }
        });

        await this.player.loadFile(tempPath);
        this.player.play();
    }

    stop() {
        this.isLooping = false;
        if (this.player) {
            this.player.stop();
            this.player = undefined;
        }
        if (this.currentFile) {
            fs.unlinkSync(this.currentFile);
            this.currentFile = undefined;
        }
        this.loopCount = 0;
    }

    get isPlaying() {
        return this.player?.isPlaying() ?? false;
    }
}