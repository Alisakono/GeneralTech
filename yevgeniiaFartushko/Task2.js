// Добавить всем видео с продолжительностью от 5 до 60 мин (вкл.) теги alpha и beta

db.videos.updateMany(
    { duration_secs: { $gte: 5 * 60, $lte: 60 * 60 } },
    {
        $addToSet: {
            tags: { $each: ['alpha', 'beta'] }
        }
    }
)