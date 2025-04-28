
import { spawn } from 'child_process';
import { Logger } from './core/utils/Logger';
import { platform } from 'process';
import * as path from 'path';

interface NoteEvent {
    type: 'noteOn' | 'noteOff';
    note: number;
    time: number; // 毫秒时间戳
    duration?: number;
}
export enum PlayMode {
    Once,
    Loop
}

export class MidiPlayerManager {
    private playerProcess?: any;
    private eventListeners: ((event: NoteEvent) => void)[] = [];
    private isLooping = false;

    async play(buffer: Buffer) {
        this.stop();

        // 启动播放器进程
        const playerPath = this.getPlatformPlayer();
        this.playerProcess = spawn(playerPath, [], {
            stdio: ['pipe', 'ignore', 'pipe'] // MIDI数据通过stdin发送
        });

        // 发送MIDI数据到进程
        this.playerProcess.stdin.write(buffer);

        // 监听实时事件
        this.playerProcess.stderr.on('data', (data: Buffer) => {
            const event = this.parseEvent(data.toString());
            event && this.eventListeners.forEach(cb => cb(event));
        });
    }

    stop() {
        this.isLooping = false;
        if (this.playerProcess) {
            this.playerProcess.kill();
            this.playerProcess = undefined;
        }
        // 发送暂停
    }

    addEventListener(cb: (event: NoteEvent) => void) {
        this.eventListeners.push(cb);
    }

    private parseEvent(data: string): NoteEvent | null {
        try {
            return JSON.parse(data.trim());
        } catch (e) {
            return null;
        }
    }

    private getPlatformPlayer(): string {
        const binPath = path.join(__dirname, '../../bin');
        const players = {
            win32: path.join(binPath, 'win', 'midiplayer.exe'),
            darwin: path.join(binPath, 'mac', 'midiplayer'),
            linux: path.join(binPath, 'linux', 'midiplayer')
        };
        return players[platform as keyof typeof players];
    }
}