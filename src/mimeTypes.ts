export class MimeTypes {
    public mimeTypes: Map<string, string>;
    public types: Array<string>;

    constructor() {
        this.mimeTypes = new Map<string, string>();
        this.mimeTypes.set("avi", "video/x-msvideo");
        this.mimeTypes.set("bmp", "image/bmp");
        this.mimeTypes.set("doc", "application/msword");
        this.mimeTypes.set("docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
        this.mimeTypes.set("gif", "image/gif");
        this.mimeTypes.set("ico", "image/x-icon");
        this.mimeTypes.set("jpeg", "image/jpeg");
        this.mimeTypes.set("jpg", "image/jpeg");
        this.mimeTypes.set("mpeg", "video/mpeg");
        this.mimeTypes.set("png", "image/png");
        this.mimeTypes.set("pdf", "application/pdf");
        this.mimeTypes.set("ppt", "application/vnd.ms-powerpoint");
        this.mimeTypes.set("pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation");
        this.mimeTypes.set("rar", "application/x-rar-compressed");
        this.mimeTypes.set("svg", "image/svg+xml");
        this.mimeTypes.set("tif", "image/tiff");
        this.mimeTypes.set("tiff", "image/tiff");
        this.mimeTypes.set("txt", "text/plain");
        this.mimeTypes.set("wav", "audio/x-wav");
        this.mimeTypes.set("xls", "application/vnd.ms-excel");
        this.mimeTypes.set("xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        this.mimeTypes.set("zip", "application/zip");

        this.types = [
            "avi",
            "bmp",
            "doc",
            "gif",
            "ico",
            "jpeg",
            "jpg",
            "mpeg",
            "png",
            "pdf",
            "ppt",
            "pptx",
            "rar",
            "svg",
            "tif",
            "tiff",
            "txt",
            "wav",
            "xls",
            "xslx",
            "zip",
        ];
}
}
