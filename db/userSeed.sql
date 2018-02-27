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