
const GETLOYHA = `
select * from loyha
`

const POSTLOYHA = `
insert into loyha(thema_uz,thema_en,author_uz,dedline,tip)
values($1,$2,$3,$4,$5) returning *
`

const OLDLOYHA = `
select * from loyha 
where loyha_id = $1
`

const PUTLOYHA = `
update loyha set 
thema_uz = $1,
thema_en = $2,
author_uz = $3,
dedline = $4,
tip = $5 
where loyha_id = $6 returning *
`


const DELETELOYHA = `
delete from loyha where loyha_id = $1 returning *
`

module.exports = {
    GETLOYHA,
    POSTLOYHA,
    OLDLOYHA,
    PUTLOYHA,
    DELETELOYHA
}