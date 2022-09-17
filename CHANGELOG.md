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

## [1.2.0] - 2020-08-08

### Added

- Extraction of images inside a PDF file
- i18n support (English and French for now) using custom localization class
- XSS sanitizing on user inputs
- Copy Base64 string to clipboard after encoding a file
- Save decoded file on computer

### Changed

- Minor code refactoring
- Minor style changes

## [1.2.1] - 2020-08-09

### Fixed

- Copy to clipboard and Save file on computer (Issue #6)

## [1.3.0] - 2022-06-11

### Added

- Call decode command with string parameter directly without going through input box (PR #21 - Issue #20)

## [1.4.0] - 2022-07-01

### Added

- Support HTML/CSS/JS files (Issue #24)

## [1.4.1] - 2022-07-01

### Changed

- Merge missing code
- Edit README

## [1.5.0] - 2022-09-17

### Added

- Allow to show/hide ordered text and images elements of a decoded PDF (now hidden by default)

### Changed

- Tech updates
