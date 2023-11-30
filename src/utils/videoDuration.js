const fs = require('fs')
const path = require('path')

const getVideoDurationInSeconds = (videoPath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(videoPath, (err, data) => {
            if (err) {
                console.error('Ошибка при чтении видеофайла:', err);
                reject(err);
            } else {
                // Поиск продолжительности видео в метаданных (байт 20-27 для MP4-файлов)
                const durationOffset = 20;
                const durationLength = 8;
                const duration = data.readDoubleBE(durationOffset);
                // Преобразование продолжительности в секунды (округление до целого числа)
                const durationInSeconds = Math.round(duration);
                resolve(durationInSeconds);
            }
        });
    });
};