# Base64Viewer

Decode Base64 strings and show the file, and encode files to Base64 strings.

## Features

### Base64 Decoding

You can decode Base64 strings corresponding to :

- Plain text
- PDF
- Images (BMP, GIF, ICO, JPG, PNG, SVG, TIF)

Other formats might be added in the future.

When the Base64 string corresponds to a PDF file, a second column, next to the PDF viewer, is added, showing all text elements and images found in the PDF file.

### Base64 Encoding

You can encode any file to a Base64 string.
When encoding a PDF file, you can switch the view between the Base64 string and a list of text elements and images found in the file.
The Base64 string can easily be used by copying it to your clipboard with the click of a button.

## Extension Settings

Two commands are available (access them using the command pallete: `Ctrl+Shift+P`)

- `base64viewer.decodeBase64`: Show an input where you can paste the Base64 string to decode
- `base64viewer.encodeBase64`: Open a file selection dialog where you can choose a file to encode

The extension supports English and French languages, based on your VSCode set language. More languages might be added in the future.

## Demos

### Decoding

![Decode PDF Demo](demo/base64Viewer-decode-pdf-demo.gif)

![Decode Image Demo](demo/base64Viewer-decode-image-demo.gif)

### Encoding

![Encode PDF Demo](demo/base64Viewer-encode-pdf-demo.gif)

![Encode Image Demo](demo/base64Viewer-encode-image-demo.gif)

## Changelog

See [CHANGELOG](CHANGELOG.md) for more information.

## Contributing

- For bugs or feature requests, please see in [GitHub Issues](https://github.com/JasonMejane/vscode-base64viewer/issues)
- Leave a review on the [Visual Studio Marketplace extension's page](https://marketplace.visualstudio.com/items?itemName=JasonMejane.base64viewer)

## Known Issues

No known issue
