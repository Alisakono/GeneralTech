//Вывести ко-во видео-роликов с тегом mega и продолжительностью от 10 мин
db.users.countDocuments(
    { tags: 'mega',
	    duration_secs:  {$lte: 10 * 60 }
    }
)