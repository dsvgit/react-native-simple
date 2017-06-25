## software
- https://expo.io/
- https://www.genymotion.com/
- VirtualBox - install with genymotion
- Android Debug Bridge https://developer.android.com/studio/command-line/adb.html
- https://www.npmjs.com/package/exp

## some settings
- add to PATH system variable path to 'paltform-tools' directory (Android Debug Bridge)
- in expo choose Host -> LAN
- install exp `npm i exp -g`, for apk generating

## development:
1. `npm i`
1. open project in expo
1. run VirtualBox
1. run genymotion
1. in expo Device -> Open on Android

## get apk
1. `cd <your_project_path>`
1. `exp build:android`
1. `exp build:status`
1. download .apk by link in status ouptput
apk example link: https://exp-shell-app-assets.s3-us-west-1.amazonaws.com/android%2F%40dsvgit%2Fdsv-test-app-c0b569d2-52ae-11e7-8999-0a580a780046-signed.apk
