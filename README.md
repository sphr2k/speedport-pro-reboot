# Speedport Pro Reboot Script

The _Speedport Pro_ router from Deutsche Telekom tends to become slow and unstable after a couple of days, so I decided to reboot it every night. This script is definitely not the most elegant solution, but it works.

## Requirements

* Docker CE

## Installation

* Change router IP and password in `speedport-reboot.js`
* Install systemd unit & timer

## Compatibilty

Tested with router firmware v4.0 (120133.4.0.022.3)
