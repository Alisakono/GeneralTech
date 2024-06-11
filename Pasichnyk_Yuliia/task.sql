db.users.find(
    {
        balance: { $gte: 0 },
        is_blocked: { $ne: true }
    }, // фильтр
    { fullname: 1, _id: 0 } 
).sort({ balance: -1 }).limit(100000000)