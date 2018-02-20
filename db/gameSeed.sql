create table game (
    id serial primary key,
    title varchar(60),
    userId number,
    wins number,
    losses number
);