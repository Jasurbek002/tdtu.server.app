

drop table if exists admins;
create table admins(
    admin_id serial primary key,
    adminname varchar(50) not null unique,
    password varchar(60) not null,
    status varchar(20) default 'admin',
    role int not null,
    created_at timestamp default CURRENT_TIMESTAMP
);

drop table if exists banners;
create table banners(
    banner_id serial primary key,
    image text not null,
    title_uz varchar(1000) not null,
    title_en varchar(1000) not null,
    text_uz varchar(1200) not null,
    text_en varchar(1200) not null
);

drop table if exists news;
create table news(
    new_id serial primary key,
    image text not null,
    title_uz varchar(100) not null,
    title_en varchar(1000) not null,
    link text not null
); 



drop table if exists loyha;
create table loyha(
    loyha_id serial primary key,
    thema_uz text not null,
    thema_en text not null,
    author_uz varchar(50) not null,
    dedline varchar(20) not null,
    tip varchar(30) not null
);



drop table if exists economy;
create table economy(
    econom_id serial primary key,
    name_uz text not null,
    name_en text not null,
    department varchar(1000) not null
);



drop table if exists docs;
create table docs(
    doc_id serial primary key,
    full_name varchar(150) not null,
    special varchar(100) not null,
    job text not null,
    type varchar(30) not null
);

drop table if exists loboratory;
create table loboratory(
    id serial primary key,
    file text not null,
    room_id int references rooms(room_id),
    name_uz varchar not null,
    name_en varchar,
    name_ru varchar
);

drop table if exists rooms;
create table rooms(
    room_id serial primary key,
    name_uz varchar not null,
    name_en varchar,
    name_ru varchar
);

