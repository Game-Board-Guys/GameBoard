--maze2d score --
update users
set
    maze_time_highscore = $1
where auth_id = $2;