db.users.find(
{is_blocked: null, balance: {$lte: 1000000}},
{fullname: 1, _id: 0}
)

db.videos.updateMany( 
{ duration_secs: { $lte: 5 * 60, $gte: 60 * 60 } }, 
{ $addToSet: { tags: { $each: ['alpha', 'beta'] } } }
)

