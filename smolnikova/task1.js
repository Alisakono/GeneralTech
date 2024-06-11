db.users.find(
{is_bloked: false,
  balance: {$lte: 1000000}},
{fullname: 1, _id:0}
 )
