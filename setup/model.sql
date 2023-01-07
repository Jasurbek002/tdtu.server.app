create database tdtu_db;

CREATE EXTENSION pgcrypto;

drop table if exists admins;
create table admins(
    admin_id serial primary key,
    adminname varchar(50) not null unique,
    password varchar(60) not null,
    status varchar(20) default 'admin',
    created_at timestamp default CURRENT_TIMESTAMP
);

drop table if exists carusel;
create table carusel(
    carusel_id serial primary key,
    image text not null,
    title varchar(100) not null,
    text varchar(1000),
);

drop table if exists news;
create table news(
    new_id serial primary key,
    image text not null,
    title varchar(100) not null,
    text varchar(1000) not null
); 

drop table if exists partners;
create table partners(
    partner_id serial primary key,
    logo text,
    link text,
);

drop table if exists loyha;
create table loyha(
    loyha_id serial primary key,
    thema text not null,
    author varchar(50) not null,
    dedline varchar(20) not null,
    status varchar(30) not null
);