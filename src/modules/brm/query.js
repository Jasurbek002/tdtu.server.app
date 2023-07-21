const GET_DATA = `
select b.*,ARRAY_AGG(JSON_BUILD_OBJECT(
    'id',bi.id,
    'subtitle_uz',bi.subtitle_uz,
    'subtitle_en',bi.subtitle_en,
    'subtext_uz',bi.subtext_uz,
    'subtext_en',bi.subtext_en
)) as items from brm b 
left join brm_info bi on bi.brm_id = b.brm_id
where b.brm_id = $1  GROUP BY b.brm_id ;
`;

const GET_INFO_ALL = `
select * from brm_info
`;
const GET_INFO_ONE = `
select * from brm_info where id = $1
`;

const POST_DATA = `
insert into brm(title_uz,title_en,text_uz,text_en)
values ($1,$2,$3,$4) returning *
`;

const PUT_DATA = `
update brm set 
title_uz = $1,
title_en = $2,
text_uz = $3,
text_en = $4
where brm_id = $5
returning *
`;

const POST_INFO_DATA = `
insert into brm_info(brm_id,subtitle_uz,subtitle_en,subtext_uz,subtext_en)
values ($1,$2,$3,$4,$5) returning *
`;

const PUT_INFO_DATA = `
update brm_info set brm_id = $1, subtitle_uz = $2, subtitle_en = $3, subtext_uz = $4, subtext_en = $5 
where id = $6
returning *
`;

module.exports = {
  GET_DATA,
  POST_DATA,
  PUT_DATA,
  POST_INFO_DATA,
  PUT_INFO_DATA,
  GET_INFO_ALL,
  GET_INFO_ONE,
};
