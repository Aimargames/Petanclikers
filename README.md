# 🐱 Petansclikers

Открытая игра-кликер: кликай кота, покупай улучшения, скины и фоны, собирай достижения.
Лицензия: **MIT** — можно свободно использовать, менять и распространять.

## Структура
- `web/` — сама игра (один файл `index.html`, без зависимостей). Открой в браузере.
- `android/` — Android-приложение (WebView-обёртка), проект для Android Studio.
- `linux/` — десктоп-версия для Linux (Electron): AppImage.

> Игра живёт в `web/index.html`. Копии в `android/.../assets/` и `linux/` обновляются скриптом `./sync.sh`.

## Сборка Android (APK)
1. Установи Android Studio.
2. `File → Open` → папка `android/`.
3. `Build → Build APK(s)` (или `./gradlew assembleDebug` после первой синхронизации).
APK: `android/app/build/outputs/apk/debug/`.

## Сборка Linux
```bash
cd linux
npm install
npm start          # запуск
npm run dist       # AppImage в linux/dist/
```

## Участие
Форки и pull request'ы приветствуются: новые скины, фоны, улучшения, достижения.
Данные игры (массивы `UP`, `SK`, `BG`, `ACH`) находятся в начале скрипта в `web/index.html`.
