# Change Log

All notable changes to the "Base64Viewer" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2020-07-26

### Added

- Base64 encoding feature
- Base64 decoding feature for pdf, text and images

## [1.1.0] - 2020-07-29

### Added

- Prettier to format code (PR #1)
- Husky to auto lint and format code (PR #1)
- More file signatures are recognized

### Changed

- Using uri.fsPath to get file path for cross OS platform (PR #1)
- Small changes to the icon
- Updating README.md

### Fixed

- Fixed document opening on Windows (PR #1 - Issue #2)
- Typos and indentation (including Issue #3)

### Removed

- unused tasks.json (PR #1)
- vsc-extension-quickstart.md (PR #1)

## [1.2.0] - 2020-08-

### Added

- Extraction of images inside a PDF file
- i18n support (English and French for now) using custom localization class
- XSS sanitizing on user inputs
- Copy Base64 string to clipboard after encoding a file

### Changed

- Minor code refactoring
- Minor style changes
