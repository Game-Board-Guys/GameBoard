create table "user" (
    id serial primary key,
    userName varchar(30),
    handle varchar(30),
    image text,
    firstName varchar(30),
    lastName varchar(30),
    email text,
    auth_id text
);

insert into "user" (
    userName,
    handle,
    firstName,
    LastName,
    email
) values (
'username test',
'handle test',
'firstname test',
'lastname test',
'test@email.com'
)


ALTER TABLE users
ADD COLUMN handle varchar(30)
DEFAULT 'User101';
ALTER TABLE users
ADD COLUMN bio varchar(350)
DEFAULT '...';

ALTER TABLE users
ADD COLUMN invade_high_score text
DEFAULT '0';

ALTER TABLE users
ADD COLUMN brick_breaker_highscore text
DEFAULT '0';

ALTER TABLE users
ADD COLUMN maze_time_highscore INTEGER
DEFAULT 0;