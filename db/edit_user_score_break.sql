-- brick breaker score --
update users
set
    brick_breaker_highscore = $1
where auth_id = $2;