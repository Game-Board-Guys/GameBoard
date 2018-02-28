-- pong wins --
update users
set
    pong_wins = $1
where auth_id = $2;