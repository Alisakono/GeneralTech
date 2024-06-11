db.users.find(
{is_blocked: null, balance: {$lte: 1000000}},
{fullname: 1, _id: 0}
)