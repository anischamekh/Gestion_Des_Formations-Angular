import { Formation } from "./Formation";

export class UploadedFile {
    fileId!: string;
    fileName!: string;
    fileData!: FormData;
	formation!: Formation;
}
