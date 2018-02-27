update users
set
    handle = $1,
    bio = $2,
    img = $3
where auth_id = $4;