db.users.find({
 is_blocked: { $ne: true },
 balance: {$lte: 10000 }
})