const GET_All = `
select l.id,l.file,l.name_uz as nameUz , l.name_en as nameEn, l.name_ru as nameRu, r.* from loboratory l 
left join rooms r on l.room_id = r.room_id 
where l.room_id = $1
`;

const GET_ONE = `
select * from loboratory where id = $1
`;
const ROOMS = `
select * from rooms
`;

const POST_DATA = `
insert into loboratory (file,room_id,name_uz,name_en,name_ru)
values ($1,$2,$3,$4,$5) returning *
`;

const PUT_DATA = `
update loboratory set file = $1 ,room_id = $2 ,name_uz = $3 ,name_en = $4 ,name_ru = $5 
where id = $6 returning * 
`;

module.exports = {
  GET_All,
  GET_ONE,
  ROOMS,
  POST_DATA,
  PUT_DATA,
};
