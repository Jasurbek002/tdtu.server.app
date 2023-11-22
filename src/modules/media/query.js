const CREATE_MEDIA_QUERY = `
insert into media(title_uz,title_en,media) 
values ($1,$2,$3) returning *
`;

const GET_ALL_MEDIA_QUERY = `
select * from media
`;

const GET_ONE_MEDIA_QUERY = `
select * from media where media_id = $1
`;

const DELETE_MEDIA_QUERY = `
delete from media where media_id = $1 returning *
`;

module.exports = {
  CREATE_MEDIA_QUERY,
  GET_ALL_MEDIA_QUERY,
  DELETE_MEDIA_QUERY,
  GET_ONE_MEDIA_QUERY
};
