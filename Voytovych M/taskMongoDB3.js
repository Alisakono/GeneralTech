--Вывести ко-во видео-роликов с тегом mega и продолжительностью от 10 мин--
db.videos.countDocuments(
    { tags: 'mega', duration_secs: { $gte: 10 * 60}}
)