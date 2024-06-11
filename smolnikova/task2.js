db.videos.updateMany(
    { duration_secs: { $gte: 5 * 60, $lte: 60 * 60 } },
    {
        $addToSet: {
            tags: { $each: ['alpha', 'beta'] }
        }
    }
)