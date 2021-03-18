# Speedport Pro Reboot

The _Speedport Pro_ router from Deutsche Telekom tends to become slow and unstable after a couple of days, so I decided to reboot it every night. This script, which simply simulates the clicks inside a headless Chrome browser using [Puppeteer](https://github.com/puppeteer/puppeteer) is definitely not the most elegant solution, but it works.

## Requirements

* Docker CE

## Installation

* Change router IP and password (`###router-password###`) in `speedport-reboot.js`
* Adapt and install `systemd` service & timer (or use `cron` if you prefer)

## Dependencies

The Buildkite [Puppeteer Docker container](https://hub.docker.com/r/buildkite/puppeteer/) is used to run the script.

## Compatibilty

Tested with router firmware v4.0 (120133.4.0.022.3)
