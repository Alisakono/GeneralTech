db.videos.countDocuments(
    {
        tags: 'mega',
        duration_secs: { $gte: 10 * 60 }
    }
)
