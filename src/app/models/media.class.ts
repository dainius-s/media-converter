import { IMedia } from '../media.interface';

export class Media implements IMedia {
    title: string;
    fileName: string;
    id: string;
    url: string;
    progress: number;

    constructor(url) {
        this.title = '';
        this.fileName = '';
        this.id = '';
        this.url = url;
        this.progress = null;
    }
}

