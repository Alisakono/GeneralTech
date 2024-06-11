//Вывести имена незаблокированных юзеров с балансом до 1 млн EUR (вкл.)
db.users.find(
    {
         is_blocked: { $ne: true },
           balance: { $gte: 0, $lte: 1000000 }
    }, // filter
    { fullname: 1, _id: 0 } // projection
)
