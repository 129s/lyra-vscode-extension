import { Player } from 'midi-player-js';
import * as fs from 'fs';
import * as path from 'path';
import { tmpdir } from 'os';

export class MidiPlayerManager {
    private player?: Player;
    private currentFile?: string;

    async play(buffer: Buffer) {
        this.stop(); // 停止当前播放

        // 创建临时MIDI文件
        const tempPath = path.join(tmpdir(), `lyra_${Date.now()}.mid`);
        fs.writeFileSync(tempPath, buffer);
        this.currentFile = tempPath;

        // 初始化播放器
        this.player = new Player();
        await this.player.loadFile(tempPath);
        this.player.play();
    }

    stop() {
        if (this.player) {
            this.player.stop();
            this.player = undefined;
        }
        if (this.currentFile) {
            fs.unlinkSync(this.currentFile);
            this.currentFile = undefined;
        }
    }

    get isPlaying() {
        return this.player?.isPlaying() ?? false;
    }
}
