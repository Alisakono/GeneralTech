db.videos.updateMany(
    {
        duration_secs: {
            $lte: 5 * 60,
            $gte: 60 * 60
        }
    },
    { $addToSet: { tags: { $each: ['alpha', 'beta'] } } }
)