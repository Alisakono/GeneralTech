--Вывести имена незаблокированных юзеров с балансом до 1 млн EUR (вкл.)--
db.users.find(
    {
        is_blocked: { $ne: true },
        balance: {$lte: 1000000 }
    },
    {
        fullname: 1,
        _id: 0
    }
)