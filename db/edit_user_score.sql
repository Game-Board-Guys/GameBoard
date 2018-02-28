-- space invaders hight score for specific player--

update users
set
    invade_high_score = $1
where auth_id = $2;